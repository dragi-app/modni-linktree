export type SiteContent = {
  hero: {
    title: string;
    subtitle: string;
    scrollLabel: string;
  };
  section: {
    eyebrow: string;
    note: string;
  };
  banner: {
    enabled: boolean;
    eyebrow: string;
    title: string;
    note: string;
    href: string;
    image: string;
    alt: string;
  };
  links: Array<{
    label: string;
    note: string;
    href: string;
  }>;
  footer: {
    tagline: string;
    note: string;
  };
};

// Вставте URL Google Apps Script JSON API, якщо контент має приходити з Google Sheets.
// Поки рядок порожній, сайт використовує надійну локальну конфігурацію нижче.
export const remoteContentUrl = '';

export const defaultContent: SiteContent = {
  hero: {
    title: 'HUSTLE',
    subtitle: 'with modni.',
    scrollLabel: 'гортай вниз',
  },
  section: {
    eyebrow: 'MODNI FLOW / OFFICIAL LINKS',
    note: 'one place. every move.',
  },
  banner: {
    enabled: true,
    eyebrow: 'THE LATEST',
    title: 'SUMMER SALE',
    note: 'акція діє до 15 вересня',
    href: 'https://modniflow.com/last-summer-sale/',
    image: '/assets/hero.jpg',
    alt: 'Нова добірка MODNI FLOW',
  },
  links: [
    {
      label: 'Website',
      note: 'Офіційний магазин',
      href: 'https://modniflow.com/',
    },
    {
      label: 'Instagram',
      note: 'Стиль та життя',
      href: 'https://www.instagram.com/modni.flow/',
    },
    {
      label: 'OLX',
      note: 'Маркетплейс',
      href: 'https://modniflow.olx.ua/',
    },
    {
      label: 'TikTok',
      note: 'Одягайся в русі',
      href: 'https://www.tiktok.com/@modni.flow?_r=1&_t=ZN-99BdbS0QZPC',
    },
    {
      label: 'YouTube',
      note: 'Історії і огляди',
      href: 'https://www.youtube.com/@modniflow',
    },
  ],
  footer: {
    tagline: 'BUILT DIFFERENT. MADE TO MOVE.',
    note: 'MODNI FLOW © 2026',
  },
};
