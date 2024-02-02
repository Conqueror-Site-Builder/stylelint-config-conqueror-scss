import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends('airbnb-base', 'plugin:unicorn/recommended'),
  ...compat.env({
    browser: true,
    node: true,
  }),
  ...compat.plugins('import', 'unicorn'),
  ...compat.config({
    env: {
      browser: true,
      es6: true,
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    extends: ['airbnb-base', 'plugin:unicorn/recommended'],
    plugins: ['import', 'unicorn'],
    rules: {
      'no-underscore-dangle': 'warn',
      'import/exports-last': 'error',
      'import/group-exports': 'warn',
      'import/no-commonjs': 'error',
      'import/no-namespace': 'error',
      'import/no-unassigned-import': 'error',
      'unicorn/no-unused-properties': 'error',
      'unicorn/no-null': 'warn',
      'unicorn/string-content': 'error',
    },
  }),
];
