import { CSSRules, SCSSRules, propertiesOrder, plugins } from '#app';

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
    'stylelint-no-unsupported-browser-features',
  ],
  rules: {
    ...plugins,
    ...propertiesOrder,
    ...CSSRules,
    ...SCSSRules,
  },
};
