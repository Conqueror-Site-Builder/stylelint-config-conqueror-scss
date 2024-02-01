export default {
  overrides: [
    {
      files: ['*.js', '*.yml'],
      options: {
        singleQuote: true,
      },
    },
    {
      files: ['*.json'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
};
