import REGEXP from '../utils/regexps.ts';

const CSSRules = {
  'at-rule-disallowed-list': ['debug'],
  'color-named': 'never',
  'declaration-empty-line-before': null,
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
    `^${REGEXP.BEM.BLOCK}*${REGEXP.BEM.ELEMENT}?${REGEXP.BEM.MODIFIER}?$`,
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

export default CSSRules;
