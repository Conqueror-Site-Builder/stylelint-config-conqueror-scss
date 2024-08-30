import { defineConfig } from 'rollup';

import { minify } from 'rollup-plugin-esbuild';

import typescript from '@rollup/plugin-typescript';

const sourceFolder = 'src';

const fileFormat = 'es';
const entryFileName = 'app';
const outputFileName = 'index';

const entryFile = `${entryFileName}.ts`;
const outputFile = `${outputFileName}.js`;

export default defineConfig([
  {
    external: ['@archoleat/reglib'],
    plugins: [typescript(), minify()],
    input: `${sourceFolder}/${entryFile}`,
    output: {
      file: outputFile,
      format: fileFormat,
    },
  },
]);
