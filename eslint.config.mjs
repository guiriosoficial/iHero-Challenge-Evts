// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.all,
  ...tseslint.configs.all,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 5,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/prefer-readonly-parameter-types': ['error', {
        allow: [
          { 'from': 'lib', 'name': 'Error' },
          { 'from': 'package', 'name': 'Socket', 'package': 'socket.io' }
        ]
      }],
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }]
    }
  },
);
