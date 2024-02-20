export default {
  overrides: [
    {
      files: ['*.js', '*.yaml'],
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
