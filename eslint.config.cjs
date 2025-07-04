// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const liteslint = require('eslint-plugin-lit');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      eslintPluginPrettierRecommended,
      liteslint.configs['flat/recommended'],
    ],
    rules: {
      // Prettier
      'prettier/prettier': ['error'],
      // Typescript
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/prefer-for-of': 'off',
      // Lit
      'lit/no-legacy-template-syntax': 'error',
      'lit/no-template-arrow': 'warn',
    },
  },
  {
    files: ['test/**/*.{js,ts}'],
    rules: {},
  }
);
