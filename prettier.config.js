export default {
  overrides: [
    {
      files: ['*.js', '*.yaml', '*.yml'],
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
