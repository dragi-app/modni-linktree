'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { defaultContent, remoteContentUrl, type SiteContent } from './content';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

function assetUrl(value: string) {
  if (!value.startsWith('/')) return value;
  return `${basePath}${value}`;
}

function safeExternalUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' ? value : '#';
  } catch {
    return '#';
  }
}

export default function Home() {
  const experienceRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<SiteContent>(defaultContent);

  useEffect(() => {
    let frame = 0;

    const updateReveal = () => {
      const travel = Math.max(window.innerHeight * 0.66, 1);
      const reveal = Math.min(Math.max(window.scrollY / travel, 0), 1);
      const root = experienceRef.current;
      root?.style.setProperty('--hero-height', `${100 - reveal * 66}svh`);
      root?.style.setProperty('--hero-radius', `${reveal * 34}px`);
      root?.style.setProperty('--copy-scale', `${1 - reveal * 0.5}`);
      root?.style.setProperty('--image-scale', `${1.04 + reveal * 0.16}`);
      root?.style.setProperty('--image-shift', `${reveal * -22}px`);
      root?.style.setProperty('--cue-opacity', `${Math.max(1 - reveal * 1.8, 0)}`);
      root?.style.setProperty('--product-rise', `${(1 - reveal) * 150}px`);
      root?.style.setProperty('--product-opacity', `${Math.max((reveal - 0.24) / 0.76, 0)}`);
      frame = 0;
    };

    const requestReveal = () => {
      if (!frame) frame = window.requestAnimationFrame(updateReveal);
    };

    updateReveal();
    window.addEventListener('scroll', requestReveal, { passive: true });
    window.addEventListener('resize', requestReveal);

    return () => {
      window.removeEventListener('scroll', requestReveal);
      window.removeEventListener('resize', requestReveal);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!remoteContentUrl) return;

    const controller = new AbortController();
    fetch(remoteContentUrl, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Не вдалося завантажити зовнішній контент');
        return response.json() as Promise<SiteContent>;
      })
      .then(setContent)
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') return;
        console.warn('MODNI content fallback is active.', error);
      });

    return () => controller.abort();
  }, []);

  const bannerHref = safeExternalUrl(content.banner.href);

  return (
    <div
      className="experience"
      ref={experienceRef}
      style={{
        '--hero-image': `url(${assetUrl('/assets/hero.jpg')})`,
        '--background-image': `url(${assetUrl('/assets/background.jpg')})`,
      } as React.CSSProperties}
    >
      <header className="hero-panel" aria-labelledby="hero-title">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-copy">
          <h1 id="hero-title">{content.hero.title}</h1>
          <p>{content.hero.subtitle}</p>
        </div>
        <a className="scroll-cue" href="#links" aria-label="Перейти до посилань">
          <span>{content.hero.scrollLabel}</span>
          <span className="arrow" aria-hidden="true">↓</span>
        </a>
      </header>

      <main className="content-shell">
        <div className="product-layer" aria-hidden="true">
          <Image className="product product-hoodie" src={assetUrl('/assets/hoodie.webp')} alt="" width={881} height={900} unoptimized />
          <Image className="product product-sneaker" src={assetUrl('/assets/sneaker.webp')} alt="" width={900} height={600} unoptimized />
          <Image className="product product-cap" src={assetUrl('/assets/cap.webp')} alt="" width={900} height={900} unoptimized />
        </div>

        <section className="link-stack" id="links" aria-label="Офіційні посилання MODNI FLOW">
          <div className="section-heading">
            <p>{content.section.eyebrow}</p>
            <span>{content.section.note}</span>
          </div>

          {content.banner.enabled && (
            <a className="promo" href={bannerHref} target="_blank" rel="noreferrer">
              <Image src={assetUrl(content.banner.image)} alt={content.banner.alt} fill sizes="(max-width: 690px) 100vw, 650px" unoptimized />
              <span className="promo-overlay" aria-hidden="true" />
              <span className="promo-copy">
                <small>{content.banner.eyebrow}</small>
                <strong>{content.banner.title}</strong>
                <em>{content.banner.note}</em>
              </span>
              <b className="promo-arrow" aria-hidden="true">↗</b>
            </a>
          )}

          <nav className="links" aria-label="Соціальні мережі та магазини">
            {content.links.map((link, index) => (
              <a
                className="link-card"
                href={safeExternalUrl(link.href)}
                target="_blank"
                rel="noreferrer"
                key={link.label}
              >
                <span className="link-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="link-copy">
                  <strong>{link.label}</strong>
                  <small>{link.note}</small>
                </span>
                <span className="link-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>

          <footer>
            <p>{content.footer.tagline}</p>
            <span>{content.footer.note}</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
