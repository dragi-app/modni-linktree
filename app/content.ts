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
    scrollLabel: 'explore',
  },
  section: {
    eyebrow: 'MODNI FLOW / OFFICIAL LINKS',
    note: 'one place. every move.',
  },
  banner: {
    enabled: true,
    eyebrow: 'THE LATEST',
    title: 'NEW DROP',
    note: 'tap to explore',
    href: 'https://modniflow.com/',
    image: '/assets/hero.jpg',
    alt: 'Нова добірка MODNI FLOW',
  },
  links: [
    {
      label: 'Website',
      note: 'official store',
      href: 'https://modniflow.com/',
    },
    {
      label: 'Instagram',
      note: 'daily style & drops',
      href: 'https://www.instagram.com/modni.flow/',
    },
    {
      label: 'OLX',
      note: 'marketplace',
      href: 'https://modniflow.olx.ua/',
    },
    {
      label: 'TikTok',
      note: 'fits in motion',
      href: 'https://www.tiktok.com/@modni.flow?_r=1&_t=ZN-99BdbS0QZPC',
    },
    {
      label: 'YouTube',
      note: 'stories & reviews',
      href: 'https://www.youtube.com/@modniflow',
    },
  ],
  footer: {
    tagline: 'BUILT DIFFERENT. MADE TO MOVE.',
    note: 'MODNI FLOW © 2026',
  },
};
