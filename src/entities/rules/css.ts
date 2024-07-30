import { messages, regex } from '#shared';

const BLOCK = regex.bem.BLOCK_REGEX;
const ELEMENT = regex.bem.ELEMENT_REGEX;
const MODIFIER = regex.bem.MODIFIER_REGEX;

const CSSRules = {
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
    `^${BLOCK}*${ELEMENT}?${MODIFIER}?$`,
    {
      message: messages.BEM_REGEX,
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

export { CSSRules };
