import CSSRules from './rules/css.js';
import SCSSRules from './rules/scss.js';

import plugins from './utils/plugins.js';

export default {
  extends: ['stylelint-config-standard-scss'],
  plugins: [
    'stylelint-gamut',
    'stylelint-high-performance-animation',
    'stylelint-order',
    'stylelint-plugin-defensive-css',
    'stylelint-plugin-logical-css',
    'stylelint-prettier',
  ],
  rules: {
    ...plugins,
    ...CSSRules,
    ...SCSSRules,
  },
};
