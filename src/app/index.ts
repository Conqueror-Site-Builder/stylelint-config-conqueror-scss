import { CSSRules } from '../entities/rules/css.ts';
import { plugins } from '../entities/plugins.ts';
import { SCSSRules } from '../entities/rules/scss.ts';

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
  ],
  rules: {
    ...plugins,
    ...CSSRules,
    ...SCSSRules,
  },
};
