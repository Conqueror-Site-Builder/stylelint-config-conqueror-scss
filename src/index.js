import CSSRules from './rules/css.js';
import SCSSRules from './rules/scss.js';

import plugins from './utils/plugins.js';

export default {
  extends: ['stylelint-config-standard-scss'],
  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-gamut',
    'stylelint-group-selectors',
    'stylelint-high-performance-animation',
    'stylelint-no-unsupported-browser-features',
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
