/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser' // Specify TypeScript parser for script sections
  },
  plugins: [
    '@typescript-eslint' // Use the TypeScript ESLint plugin
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.vue'], // Ensure TypeScript and Vue files are included
      parser: '@typescript-eslint/parser'
    }
  ]
}
