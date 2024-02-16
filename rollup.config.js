import { minify } from 'rollup-plugin-esbuild';

export default {
  plugins: [minify()],
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'es',
  },
};
