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
    icon?: LinkIcon;
  }>;
  footer: {
    tagline: string;
    note: string;
  };
};

export type LinkIcon = 'website' | 'instagram' | 'marketplace' | 'tiktok' | 'youtube';

// Вставте URL Google Apps Script JSON API, якщо контент має приходити з Google Sheets.
// Поки рядок порожній, сайт використовує надійну локальну конфігурацію нижче.
export const remoteContentUrl = '';

export const defaultContent: SiteContent = {
  hero: {
    title: 'Лови хвилю',
    subtitle: 'з modni.flow',
    scrollLabel: 'гортай вниз',
  },
  section: {
    eyebrow: 'MODNI FLOW / Корисні посилання',
    note: 'ОДНЕ МІСЦЕ. ТВІЙ КОЖЕН РУХ.',
  },
  banner: {
    enabled: true,
    eyebrow: 'Актуально',
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
      icon: 'website',
    },
    {
      label: 'Instagram',
      note: 'Стиль та життя',
      href: 'https://www.instagram.com/modni.flow/',
      icon: 'instagram',
    },
    {
      label: 'OLX',
      note: 'Маркетплейс',
      href: 'https://modniflow.olx.ua/',
      icon: 'marketplace',
    },
    {
      label: 'TikTok',
      note: 'Одягайся в русі',
      href: 'https://www.tiktok.com/@modni.flow?_r=1&_t=ZN-99BdbS0QZPC',
      icon: 'tiktok',
    },
    {
      label: 'YouTube',
      note: 'Історії і огляди',
      href: 'https://www.youtube.com/@modniflow',
      icon: 'youtube',
    },
  ],
  footer: {
    tagline: 'ONLY ORIGINAL',
    note: 'MODNI FLOW © 2026',
  },
};
