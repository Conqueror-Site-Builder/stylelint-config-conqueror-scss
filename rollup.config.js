import { defineConfig } from 'rollup';
import { minify } from 'rollup-plugin-esbuild';

export default defineConfig({
  plugins: [minify()],
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'es',
  },
});
