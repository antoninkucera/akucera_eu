// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://akucera.eu',
  redirects: {
    '/mastering-tableau-cloud-logs-from-s3-to-a-hundreds-fields-in-bigquery': 'https://antoninkucera.substack.com/p/mastering-tableau-cloud-logs-from-s3-to-a-hundreds-fields-in-bigquery',
    '/data-analytics/mastering-tableau-cloud-logs-from-s3-to-a-hundreds-fields-in-bigquery': 'https://antoninkucera.substack.com/p/mastering-tableau-cloud-logs-from-s3-to-a-hundreds-fields-in-bigquery',

    '/bigquery-overview-novy-rozcestnik-v-komplexnim-svete-dat': 'https://antoninkucera.substack.com/p/bigquery-overview-novy-rozcestnik-v-komplexnim-svete-dat',
    '/cs/business-intelligence-cs/bigquery-overview-novy-rozcestnik-v-komplexnim-svete-dat': 'https://antoninkucera.substack.com/p/bigquery-overview-novy-rozcestnik-v-komplexnim-svete-dat',

    '/bigquery-overview-a-new-navigation-hub-in-the-complex-analytics-platform': 'https://antoninkucera.substack.com/p/bigquery-overview-a-new-navigation-hub-in-the-complex-analytics-platform',
    '/business-intelligence/bigquery-overview-a-new-navigation-hub-in-the-complex-analytics-platform': 'https://antoninkucera.substack.com/p/bigquery-overview-a-new-navigation-hub-in-the-complex-analytics-platform',
    '/data-analytics/bigquery-overview-a-new-navigation-hub-in-the-complex-analytics-platform': 'https://antoninkucera.substack.com/p/bigquery-overview-a-new-navigation-hub-in-the-complex-analytics-platform',

    '/no-blueprint-exists-why-ai-made-me-double-down-on-being-data-informed': 'https://antoninkucera.substack.com/p/no-blueprint-exists-why-ai-made-me-double-down-on-being-data-informed',
    '/business-intelligence/no-blueprint-exists-why-ai-made-me-double-down-on-being-data-informed': 'https://antoninkucera.substack.com/p/no-blueprint-exists-why-ai-made-me-double-down-on-being-data-informed'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});