module.exports = {
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    extends: [
      'plugin:vue/vue3-recommended',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended'
    ],
    rules: {
      'vue/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
  