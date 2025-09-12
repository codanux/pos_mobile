// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: false,
  app: {
    head: {
      title: 'Stitch Design',
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com/', crossorigin: '' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com/' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?display=swap&family=Inter:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900',
        },
        { rel: 'icon', type: 'image/x-icon', href: 'data:image/x-icon;base64,' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined' },
      ],
    },
  },
  css: ['@/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
})