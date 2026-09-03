// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-09-03',

  modules: ['@nuxt/eslint'],

  app: {
    baseURL: '/',
    head: {
      title: 'Yuta Kurotaki | mo-fu.org',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Yuta Kurotaki Web site' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // CSSの設定(Bulma はここで一度だけ読み込む)
  css: ['bulma/css/bulma.min.css', '~/assets/css/main.css'],

  eslint: {
    config: {
      stylistic: false
    }
  }
})
