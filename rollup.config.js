import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'es',
  },
  plugins: [
    terser({
      ecma: 2015,
      compress: {
        toplevel: true,
      },
      mangle: { toplevel: true },
      output: { quote_style: 1 },
    }),
  ],
};
