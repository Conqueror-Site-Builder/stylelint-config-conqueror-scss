# Stylelint Config Extended SCSS

![NPM Version](https://img.shields.io/npm/v/%40archoleat%2Fstylelint-config-extended-scss)
![NPM Downloads](https://img.shields.io/npm/dm/%40archoleat%2Fstylelint-config-extended-scss)
![ESM](https://img.shields.io/badge/ESM-fe0)
![Provenance](https://img.shields.io/badge/Provenance-fo0)
![CodeQL](https://img.shields.io/github/actions/workflow/status/archoleat/stylelint-config-extended-scss/codeql.yaml?label=CodeQL)
![Specs](https://img.shields.io/github/actions/workflow/status/archoleat/stylelint-config-extended-scss/spec.yaml?label=Specs)
![Commitlint](https://img.shields.io/github/actions/workflow/status/archoleat/stylelint-config-extended-scss/commitlint.yaml?label=Commitlint)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/archoleat/stylelint-config-extended-scss/editorconfig.yaml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/archoleat/stylelint-config-extended-scss/prettier.yaml?label=Prettier)
![ESLint](https://img.shields.io/github/actions/workflow/status/archoleat/stylelint-config-extended-scss/eslint.yaml?label=ESLint)
![Remark](https://img.shields.io/github/actions/workflow/status/archoleat/stylelint-config-extended-scss/remark.yaml?label=Remark)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [This Config](#this-config)
- [Contributing](#contributing)
- [License](#license)

## Installation

```shell
bun i -D @archoleat/stylelint-config-extended-scss stylelint-define-config
```

## Usage

Add the following code to the `stylelint.config.ts` or `stylelint.config.js`
file:

```js
import { defineConfig } from 'stylelint-define-config';

export default defineConfig({
  extends: '@archoleat/stylelint-config-extended-scss',
});
```

### Add the Space Between Logical Groups

If you want to add spaces between logical groups,
add this rule to your **Stylelint** config:

```js
import { defineConfig } from 'stylelint-define-config';

export default defineConfig({
  extends: '@archoleat/stylelint-config-extended-scss',
  rules: {
    'declaration-empty-line-before': null,
  },
});
```

#### Before

```scss
.popup {
  opacity: 0;
  position: fixed;
  inset: 0;
  pointer-events: none;
}
```

#### After

```scss
.popup {
  opacity: 0;

  position: fixed;
  inset: 0;

  pointer-events: none;
}
```

## This Config

### Extends

- Extends the [`stylelint-config-standard-scss` shared config](https://github.com/stylelint-scss/stylelint-config-standard-scss)
  and configures it's rules for **SCSS**.

- [`stylelint-prettier/recommended`](https://github.com/prettier/stylelint-prettier):
  Runs **Prettier** to format **SCSS** code.

### Plugins

- [`stylelint-declaration-block-no-ignored-properties`](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties):
  Disallow property values that are ignored due to another
  property value in the same rule.

- [`stylelint-gamut`](https://github.com/fpetrakov/stylelint-gamut):
  Throw warning if color goes out of **sRGB**
  color space and is not wrapped in `@media (color-gamut: p3) {}`
  or `@media (color-gamut: rec2020) {}`

- [`stylelint-group-selectors`](https://github.com/ssivanatarajan/stylelint-group-selectors):
  Identify the selectors, which can be grouped,
  as they have same set of properties and values.

- [`stylelint-high-performance-animation`](https://github.com/kristerkari/stylelint-high-performance-animation):
  Enhances your animations.

- [`stylelint-order`](https://github.com/hudochenkov/stylelint-order):
  Sorts **over 400 properties** for enhanced clarity and maintainability.

  > Properties are logically grouped and separated by a space.

- [`stylelint-plugin-defensive-css`](https://github.com/yuschick/stylelint-plugin-defensive-css):
  Enforcing defensive **CSS** best practices.

- [`stylelint-plugin-logical-css`](https://github.com/yuschick/stylelint-plugin-logical-css):
  Replace properties with logical alternatives.

- [`stylelint-rem-over-px`](https://github.com/a-tokyo/stylelint-rem-over-px):
  Enforce the usage of rem units over px units.

  > Declaring the rule with default values is equivalent to:
  ```json
    "rem-over-px/rem-over-px": [
      true,
      {
        "ignore": "1px",
        "ignoreFunctions": ["url"],
        "ignoreAtRules": ["media"],
        "fontSize": 16
      }
    ],
  ```

- [`stylelint-no-unsupported-browser-features`](https://github.com/RJWadley/stylelint-no-unsupported-browser-features):
  Disallow features that aren't supported by your target browser audience.

  > For this plugin, `browserslist` is already configured
  > with the following options:
  > `> 1.5%`
  > `Firefox ESR`
  > `last 2 versions`
  > `not dead`

  If you want to use your own config, then create a `browserslist`
  file in your project's root.

### Rules

This is a list of the lints turned on in this configuration, and what they do.

#### CSS

##### At-rule

- [`at-rule-disallowed-list`](https://stylelint.io/user-guide/rules/at-rule-disallowed-list):
  Rule enabled.
  - Disallow the use of `@debug`.

##### Case

- [`value-keyword-case`](https://stylelint.io/user-guide/rules/value-keyword-case):
  Rule enabled.

  > Ignore: `text-rendering`.

##### Color

- [`color-named`](https://stylelint.io/user-guide/rules/color-named):
  Rule disabled.

##### Declaration

- [`declaration-no-important`](https://stylelint.io/user-guide/rules/declaration-no-important):
  Rule enabled.

##### Descending

- [`no-descending-specificity`](https://stylelint.io/user-guide/rules/no-descending-specificity):
  Rule disabled.

##### Function

- [`function-url-no-scheme-relative`](https://stylelint.io/user-guide/rules/function-url-no-scheme-relative):
  Rule enabled.

##### Max & Min

- [`max-nesting-depth`](https://stylelint.io/user-guide/rules/max-nesting-depth):
  `3`.

  > Ignore: `blockless-at-rules`.

- [`selector-max-combinators`](https://stylelint.io/user-guide/rules/selector-max-combinators):
  `4`.

- [`selector-max-compound-selectors`](https://stylelint.io/user-guide/rules/selector-max-compound-selectors):
  `3`.

- [`selector-max-universal`](https://stylelint.io/user-guide/rules/selector-max-universal):
  `1`.

##### Notation

- [`font-weight-notation`](https://stylelint.io/user-guide/rules/font-weight-notation):
  Numeric.

- [`keyframe-selector-notation`](https://stylelint.io/user-guide/rules/keyframe-selector-notation):
  Percentage.

##### Pattern

- [`selector-class-pattern`](https://stylelint.io/user-guide/rules/selector-class-pattern):
  **BEM** naming convention.

##### Selector

- [`selector-no-qualifying-type`](https://stylelint.io/user-guide/rules/selector-no-qualifying-type):
  Rule enabled.

##### Unknown

- [`media-feature-name-value-no-unknown`](https://stylelint.io/user-guide/rules/media-feature-name-value-no-unknown):
  Rule enabled.

- [`no-unknown-animations`](https://stylelint.io/user-guide/rules/no-unknown-animations):
  Rule enabled.

#### SCSS

##### SCSS At-rule

- [`scss/at-each-key-value-single-line`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-each-key-value-single-line):
  Rule enabled.

- [`scss/at-root-no-redundant`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-root-no-redundant):
  Rule enabled.

- [`scss/at-use-no-redundant-alias`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-use-no-redundant-alias):
  Rule enabled.

##### Comment

- [`scss/comment-no-loud`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/comment-no-loud):
  Rule enabled.

- [`scss/double-slash-comment-inline`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/double-slash-comment-inline):
  Rule disabled.

##### SCSS Declaration

- [`scss/declaration-nested-properties`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/declaration-nested-properties):
  Rule disabled.

- [`scss/dimension-no-non-numeric-values`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/dimension-no-non-numeric-values):
  Rule enabled.

##### Dollar Variable

- [`scss/dollar-variable-empty-line-after`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/scss/dollar-variable-empty-line-after):
  Rule enabled.

  > Expect: `last-nested`, `before-comment`, `before-dollar-variable`.
  >
  > Ignore: `before-comment`, `inside-single-line-block`.

- [`scss/dollar-variable-colon-newline-after`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/dollar-variable-colon-newline-after):
  Rule enabled.

- [`scss/dollar-variable-no-namespaced-assignment`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/dollar-variable-no-namespaced-assignment):
  Rule enabled.

- [`scss/no-duplicate-dollar-variables`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/no-duplicate-dollar-variables):
  Rule enabled.

##### SCSS Function

- [`scss/function-color-relative`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/function-color-relative):
  Rule enabled.

  - `darken()`
  - `desaturate()`
  - `fade-in()`
  - `fade-out()`
  - `lighten()`
  - `opacify()`
  - `saturate()`
  - `transparentize()`

##### Import

- [`scss/partial-no-import`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/partial-no-import):
  Rule enabled.

##### Maps

- [`scss/map-keys-quotes`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/map-keys-quotes):
  Rule enabled.

##### Media

- [`scss/media-feature-value-dollar-variable`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/media-feature-value-dollar-variable):
  Rule enabled.

##### SCSS Selector

- [`scss/selector-no-redundant-nesting-selector`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/selector-no-redundant-nesting-selector):
  Rule enabled.

##### SCSS Unknown

- [`scss/property-no-unknown`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/property-no-unknown):
  Rule enabled.

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).
