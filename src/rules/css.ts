import regex from '../utils/regexps.ts';

export default {
  'at-rule-disallowed-list': ['debug'],
  'color-named': 'never',
  'declaration-no-important': true,
  'font-weight-notation': 'numeric',
  'function-url-no-scheme-relative': true,
  'keyframe-selector-notation': 'percentage',
  'max-nesting-depth': [
    3,
    {
      ignore: ['blockless-at-rules'],
    },
  ],
  'media-feature-name-value-no-unknown': true,
  'no-descending-specificity': null,
  'no-unknown-animations': true,
  'selector-class-pattern': [
    `^${regex.BEM.BLOCK_PATTERN}*${regex.BEM.ELEMENT_PATTERN}?${regex.BEM.MODIFIER_PATTERN}?$`,
    {
      message: 'Expected lowercase class name by BEM (block__element--modifier)',
    },
  ],
  'selector-max-combinators': 4,
  'selector-max-compound-selectors': 3,
  'selector-max-id': 0,
  'selector-max-universal': 1,
  'selector-no-qualifying-type': true,
  'value-keyword-case': [
    'lower',
    {
      ignoreProperties: ['text-rendering'],
    },
  ],
};
