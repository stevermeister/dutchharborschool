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
