// Copyright (c) 2024 Archoleat

const CSSRules = {
  'color-named': 'never',
  'declaration-no-important': true,
  'font-weight-notation': 'numeric',
  'function-url-no-scheme-relative': true,
  'keyframe-selector-notation': 'percentage',
  'max-nesting-depth': [
    //?
    4,
    {
      ignore: ['blockless-at-rules'],
    },
  ],
  'media-feature-name-value-no-unknown': true,
  'no-descending-specificity': null, //?
  'no-unknown-animations': true,
  'selector-class-pattern': [
    '^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$',
    {
      message: 'Expected class name to be bem',
    },
  ],
  'selector-max-combinators': 4,
  'selector-max-compound-selectors': 4,
  'selector-max-id': 1,
  'selector-max-universal': 1,
  'selector-no-qualifying-type': [
    true,
    {
      ignore: ['attribute'],
    },
  ],
  'time-min-milliseconds': [
    100,
    {
      ignore: ['delay'],
    },
  ],
  'value-keyword-case': [
    'lower',
    {
      ignoreProperties: ['text-rendering'],
    },
  ],
};

export default CSSRules;
