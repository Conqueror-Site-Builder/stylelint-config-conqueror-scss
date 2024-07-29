import { defineConfig } from 'rollup';

import { minify } from 'rollup-plugin-esbuild';

import typescript from '@rollup/plugin-typescript';

export default defineConfig([
  {
    plugins: [typescript(), minify()],
    input: 'src/index.ts',
    output: {
      file: 'index.js',
      format: 'es',
    },
  },
]);
