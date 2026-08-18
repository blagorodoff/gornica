# ГОРНИЦА — статический сайт

Готовый набор: `index.html`, `styles.css`, `script.js` и папка `assets/`.

## Что заменить перед публикацией

1. `assets/fonts/MontagnaLTD.woff2` — положить реальный файл фирменного шрифта. CSS уже подключает его через `@font-face`.
2. `assets/video/hero.mp4` — положить короткий зацикленный ролик студии (16:9 или вертикальный safe crop), 8–20 секунд, оптимизированный для web.
3. Изображения в `styles.css` — заменить remote Unsplash URL на реальные фото «ГОРНИЦЫ».
4. Портреты педагогов — заменить placeholder изображения на реальные фотографии.
5. Форма в `index.html` — заменить `mailto:` на CRM / Formspree / backend endpoint.
6. VK — реализовать серверный прокси/endpoint и отрисовку в `#vk-news` и `#vk-announcements` согласно комментариям в `script.js`.

## Структура

- `index.html` — семантическая разметка всех секций.
- `styles.css` — адаптив, фирменные цвета, motion, layout.
- `script.js` — sticky header, мобильное меню, Intersection Observer, хуки для VK.
- `assets/fonts/` — фирменный шрифт.
- `assets/video/` — hero video.

## Запуск

Открыть `index.html` локально для визуальной проверки или разместить на любом статическом хостинге.
