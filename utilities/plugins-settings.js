// Copyright (c) 2024 Archoleat

const pluginsSettings = {
  'plugin/no-low-performance-animation-properties': true,
  'plugin/use-defensive-css': [
    true,
    {
      'accidental-hover': true,
      'background-repeat': true,
      'custom-property-fallbacks': true,
      'flex-wrapping': true,
      'scroll-chaining': true,
      'vendor-prefix-grouping': true,
    },
  ],
  'plugin/use-logical-properties-and-values': true,
  'plugin/use-logical-units': true,
};

export default pluginsSettings;
