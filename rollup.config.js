import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import typescript from '@rollup/plugin-typescript';

const indexFile = 'src/index.ts';

export default defineConfig([
  {
    plugins: [typescript({ outputToFilesystem: true }), minify()],
    input: indexFile,
    output: {
      file: 'index.js',
      format: 'es',
    },
  },
  {
    plugins: [dts()],
    input: indexFile,
    output: {
      file: 'index.d.ts',
    },
  },
]);
