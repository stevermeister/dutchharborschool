import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dutchharborschool.nl',
  trailingSlash: 'always',
  build: {
    format: 'directory', // /about-me/ instead of /about-me.html
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'uk',
        locales: {
          uk: 'uk-UA',
          ru: 'ru-RU',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'uk',
    locales: ['uk', 'ru'],
    routing: {
      prefixDefaultLocale: false, // UA at /, RU at /ru/
    },
  },
});
