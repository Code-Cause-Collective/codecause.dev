import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import liteslint from 'eslint-plugin-lit';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import { globalIgnores } from 'eslint/config';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  eslintPluginPrettierRecommended,
  liteslint.configs['flat/recommended'],
  globalIgnores(['dist/**/*']),
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    plugins: {},
    rules: {
      // Prettier
      'prettier/prettier': 'error',
      // Typescript
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/prefer-for-of': 'off',
      // Lit
      'lit/no-legacy-template-syntax': 'error',
      'lit/no-template-arrow': 'off',
    },
  },
  {
    files: ['tests/**/*.{js,ts}'],
    rules: {},
  },
];
