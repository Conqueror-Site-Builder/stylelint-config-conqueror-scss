import path from 'node:path';
import { fileURLToPath } from 'node:url';

import globals from 'globals';

import { FlatCompat } from '@eslint/eslintrc';

import importPlugin from 'eslint-plugin-import';
import unicornPlugin from 'eslint-plugin-unicorn';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

export default [
  ...compat.extends('airbnb-base', 'plugin:unicorn/recommended'),
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      importPlugin,
      unicornPlugin,
    },
    rules: {
      'import/exports-last': 'error',
      'import/extensions': 'warn',
      'import/group-exports': 'warn',
      'import/no-commonjs': 'error',
      'import/no-namespace': 'error',
      'import/no-unassigned-import': 'error',
      'unicorn/no-null': 'warn',
      'unicorn/no-unused-properties': 'error',
      'unicorn/string-content': 'error',
      'no-underscore-dangle': 'warn',
    },
  },
];
