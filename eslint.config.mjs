// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // 単語1つのコンポーネント名(Dragon など)を許可
    'vue/multi-word-component-names': 'off'
  }
})
