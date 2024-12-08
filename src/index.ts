import { plugins } from '#config/plugins.ts';
import { propertiesOrder } from '#properties/order.ts';
import { CSSRules } from '#rules/css.ts';
import { SCSSRules } from '#rules/scss.ts';

export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-gamut',
    'stylelint-group-selectors',
    'stylelint-high-performance-animation',
    'stylelint-order',
    'stylelint-plugin-defensive-css',
    'stylelint-plugin-logical-css',
    'stylelint-rem-over-px',
  ],
  rules: {
    ...plugins,
    ...CSSRules,
    ...SCSSRules,
    ...propertiesOrder,
  },
};
