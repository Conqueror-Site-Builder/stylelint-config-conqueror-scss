import { defineConfig } from 'rollup';

import { minify } from 'rollup-plugin-esbuild';

import typescript from '@rollup/plugin-typescript';

const sourceFolder = 'src';

const fileFormat = 'es';
const fileName = 'index';

const indexFile = `${fileName}.ts`;
const outputFile = `${fileName}.js`;

export default defineConfig([
  {
    external: ['@archoleat/reglib'],
    plugins: [typescript(), minify()],
    input: `${sourceFolder}/${indexFile}`,
    output: {
      file: outputFile,
      format: fileFormat,
    },
  },
]);
