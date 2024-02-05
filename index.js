// Copyright (c) 2024 Archoleat

import CSSRules from './utilities/css-rules.js';
import SCSSRules from './utilities/scss-rules.js';

import pluginsSettings from './utilities/plugins-settings.js';
import propertiesOrder from './utilities/order.js';

export default {
  extends: ['stylelint-config-standard-scss'],
  plugins: [
    'stylelint-high-performance-animation',
    'stylelint-order',
    'stylelint-plugin-defensive-css',
    'stylelint-plugin-logical-css',
    'stylelint-prettier',
  ],
  rules: {
    'prettier/prettier': true,
    ...propertiesOrder,
    ...pluginsSettings,
    ...CSSRules,
    ...SCSSRules,
  },
};
