# MODNI Linktree

Адаптивна linktree-сторінка MODNI FLOW із повноекранним hero, scroll-переходом у компактний стан, промобанером, офіційними посиланнями та декоративними товарними PNG.

## Як швидко змінити контент

Усі тексти, адреси та налаштування банера зібрані у файлі `app/content.ts`.

- Щоб змінити посилання банера, відредагуйте `banner.href`.
- Щоб змінити банер, додайте нове зображення до `public/assets/` і вкажіть шлях у `banner.image`.
- Щоб тимчасово сховати банер, установіть `banner.enabled: false`.
- Щоб змінити кнопки, відредагуйте масив `links`.

Якщо зображення банера завжди матиме однакову назву, достатньо замінити один файл у `public/assets/` — верстку змінювати не потрібно.

## Google Sheets

Для GitHub Pages найнадійніший базовий варіант — локальний `content.ts`: він швидкий, не залежить від стороннього API та версіонується разом із сайтом.

Якщо банер і кнопки потрібно змінювати без нового деплою, сайт уже має точку підключення: `remoteContentUrl` у `app/content.ts`. Туди можна вставити URL Google Apps Script Web App, який повертає JSON тієї самої структури, що й `defaultContent`. Не публікуйте в такому Google Sheet секрети або приватні дані: весь контент linktree буде публічним.

## Локальний запуск

```bash
npm install
npm run dev
```

## GitHub Pages

Standalone workflow `.github/workflows/deploy-pages.yml` автоматично:

1. збирає статичну версію сайту;
2. визначає правильний шлях для user/organization Pages або project Pages;
3. публікує папку `out` через GitHub Pages.

У repository `dragi-app/modni-linktree` відкрийте **Settings → Pages** і виберіть **GitHub Actions** як source. Після кожного push у `main` workflow збере й опублікує сайт за адресою `https://dragi-app.github.io/modni-linktree/`.
