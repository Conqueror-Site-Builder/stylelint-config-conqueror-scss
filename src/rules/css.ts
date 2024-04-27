import { messages } from '../utils/messages.ts';
import { regex } from '../utils/regexps.ts';

const BLOCK = regex.bem.BLOCK_PATTERN;
const ELEMENT = regex.bem.BLOCK_PATTERN;
const MODIFIER = regex.bem.BLOCK_PATTERN;

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
      message: messages.BEM_PATTERN,
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
