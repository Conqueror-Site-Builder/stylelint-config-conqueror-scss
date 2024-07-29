import { defineConfig } from 'rollup';

import { minify } from 'rollup-plugin-esbuild';

import typescript from '@rollup/plugin-typescript';

const fileName = 'index';

export default defineConfig([
  {
    plugins: [typescript(), minify()],
    input: `src/${fileName}.ts`,
    output: {
      file: `${fileName}.js`,
      format: 'es',
    },
  },
]);
