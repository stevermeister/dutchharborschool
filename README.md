# Dutch Harbor School

Сайт школи нідерландської мови онлайн. Побудовано на [Astro 5](https://astro.build) — статичний генератор з фокусом на швидкість та SEO.

## 🚀 Старт

```bash
npm install        # встановити залежності
npm run dev        # запустити dev-сервер на http://localhost:4321
npm run build      # збірка у ./dist
npm run preview    # перегляд продакшн-збірки локально
```

## 📁 Структура

```
src/
├── pages/               # сторінки сайту
│   ├── index.astro     # головна UA
│   ├── about-me/       # /about-me/
│   ├── about-school/   # /about-school/
│   ├── how-it-happens/ # /how-it-happens/
│   ├── faq/            # /faq/
│   ├── blog/           # /blog/
│   │   ├── index.astro       # список статей
│   │   └── [...slug].astro   # одна стаття
│   └── ru/             # російська версія (дзеркала)
├── content/
│   ├── blog-uk/        # статті українською (markdown)
│   └── blog-ru/        # статті російською
├── layouts/
│   └── BaseLayout.astro      # головний шаблон (SEO, OG, schema)
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   └── ReviewCard.astro
└── styles/
    └── global.css      # глобальні стилі
```

## ✍️ Як додати нову статтю блогу

Створи файл `src/content/blog-uk/назва-статті.md`:

```markdown
---
title: "Заголовок статті"
description: "Опис для SEO та превью"
publishDate: 2026-05-25
tags: ["nederlands", "inburgering"]
image: "/images/blog/photo.jpg"
---

## Підзаголовок

Текст статті у Markdown...
```

Збережи → `git commit` → `git push` → через 90 секунд стаття на сайті.

## 🚀 Деплой

GitHub Actions автоматично деплоїть на GitHub Pages при пуші в `main`.

Налаштування GitHub Pages:
1. Settings → Pages
2. Source: **GitHub Actions**
3. Custom domain: `dutchharborschool.nl` (CNAME файл вже у `public/`)

## 🔧 TODO перед запуском у продакшн

1. **Замінити Google Forms URL** на реальний (зараз `https://forms.gle/your-form-id` — у всіх файлах)
2. **Замінити GA4 measurement ID** `G-XXXXXXXXXX` у `BaseLayout.astro`
3. **Додати favicon.png та apple-touch-icon.png** у `public/`
4. **Додати og-default.jpg** у `public/images/` (рекомендовано 1200×630px)
5. **Перенести існуючі картинки** з `wp-content/uploads/` у `public/images/`

## GA4 Conversion Setup

After deploying, configure GA4 to mark the following events as conversions:

1. Go to Google Analytics → Admin → Events
2. Wait 24-48 hours after deploy for events to appear automatically (or trigger them manually first by clicking a CTA on the live site with cookie consent granted)
3. Find these events in the list:
   - `cta_click` (with parameter `cta_location`)
   - `form_submit`
4. For each, toggle "Mark as conversion" to ON
5. (Optional) Create a custom dimension for `cta_location` in Admin → Custom definitions → Custom dimensions → Create

For `form_submit` tracking to work, Maryna needs to edit the Google Form confirmation message to include a link back to the site:
- Open the Google Form → Settings → Presentation → "Confirmation message"
- Add: "Дякуємо! Незабаром зв'яжемося з вами. [Повернутися на сайт](https://dutchharborschool.nl/?form_submitted=true)"
