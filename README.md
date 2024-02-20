# Stylelint Config Extended SCSS

![ESM Only](https://img.shields.io/badge/ESM-only-gray?labelColor=fe0)
![NPM Version](https://img.shields.io/npm/v/%40archoleat%2Fstylelint-config-extended-scss)
![Test](https://img.shields.io/github/actions/workflow/status/Archoleat/stylelint-config-extended-scss/mocha.yaml?label=Test)
![NPM Downloads](https://img.shields.io/npm/dm/%40archoleat%2Fstylelint-config-extended-scss)
![Commitlint](https://img.shields.io/github/actions/workflow/status/Archoleat/core/commitlint.yaml?label=Commitlint)
![CodeQL](https://img.shields.io/github/actions/workflow/status/Archoleat/stylelint-config-extended-scss/codeql.yaml?label=CodeQL)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/Archoleat/stylelint-config-extended-scss/editorconfig.yaml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/Archoleat/stylelint-config-extended-scss/prettier.yaml?label=Prettier)
![Markdown](https://img.shields.io/github/actions/workflow/status/Archoleat/stylelint-config-extended-scss/markdown.yaml?label=Markdown)
![ESLint](https://img.shields.io/github/actions/workflow/status/Archoleat/stylelint-config-extended-scss/eslint.yaml?label=ESLint)

> Extended Shareable Config for Stylelint With Property Sorting

## Table of Contents

-   [This Config](#this-config)
    -   [Extends](#extends)
    -   [Plugins](#plugins)

-   [Installation](#installation)

-   [Usage](#usage)
    -   [Extending the Config](#extending-the-config)

-   [Rules](#rules)
    -   [CSS](#css)
    -   [SCSS](#scss)

-   [License](#license)

## This Config

### Extends

-   Extends the [`stylelint-config-standard-scss` shared config](https://github.com/stylelint-scss/stylelint-config-standard-scss)
    and configures it's rules for **SCSS**.

### Plugins

-   [`stylelint-declaration-block-no-ignored-properties`](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties):
    Disallow property values that are ignored due to another
    property value in the same rule.

    > Use `.browserslistrc`.

-   [`stylelint-gamut`](https://github.com/fpetrakov/stylelint-gamut):
    Throw warning if color goes out of **sRGB**
    color space and is not wrapped in `@media (color-gamut: p3) {}`
    or `@media (color-gamut: rec2020) {}`

-   [`stylelint-group-selectors`](https://github.com/ssivanatarajan/stylelint-group-selectors):
    Identify the selectors, which can be grouped,
    as they have same set of properties and values.

-   [`stylelint-high-performance-animation`](https://github.com/kristerkari/stylelint-high-performance-animation):
    Enhances your animations.

-   [`stylelint-no-unsupported-browser-features`](https://github.com/ismay/stylelint-no-unsupported-browser-features):
    Disallow features that aren't supported by your target browser audience.

-   [`stylelint-order`](https://github.com/hudochenkov/stylelint-order):
    Sorts **over 400 properties** for enhanced clarity and maintainability.

    > Properties are logically grouped and separated by a space.

-   [`stylelint-plugin-defensive-css`](https://github.com/yuschick/stylelint-plugin-defensive-css):
    Enforcing defensive **CSS** best practices.

-   [`stylelint-plugin-logical-css`](https://github.com/yuschick/stylelint-plugin-logical-css):
    Replace properties with logical alternatives.

-   [`stylelint-prettier`](https://github.com/prettier/stylelint-prettier):
    Runs **Prettier** as a **Stylelint** rule and reports
    differences as individual **Stylelint** issues.

## Installation

```shell
# npm
npm i -D @archoleat/stylelint-config-extended-scss
```

```shell
# pnpm
pnpm i -D @archoleat/stylelint-config-extended-scss
```

```shell
# yarn
yarn add --dev @archoleat/stylelint-config-extended-scss
```

## Usage

```js
// stylelint.config.js
export default {
  extends: '@archoleat/stylelint-config-extended-scss',
};
```

### Extending the Config

```js
// stylelint.config.js
export default {
  extends: '@archoleat/stylelint-config-extended-scss',
  rules: {
    'selector-max-compound-selectors': 4,
    'value-no-vendor-prefix': false,
  },
};
```

## Rules

This is a list of the lints turned on in this configuration, and what they do.

### CSS

#### At-rule

-   [`at-rule-disallowed-list`](https://stylelint.io/user-guide/rules/at-rule-disallowed-list):
    List of disallowed at-rules.
    -   Disallow the use of `@debug`.

#### Case

-   [`value-keyword-case`](https://stylelint.io/user-guide/rules/value-keyword-case):
    Lowercase for keywords values.
    Ignore `text-rendering`.

#### Color

-   [`color-named`](https://stylelint.io/user-guide/rules/color-named):
    Colors must never be named.

#### Declaration

-   [`declaration-no-important`](https://stylelint.io/user-guide/rules/declaration-no-important):
    Disallow `!important` within declarations.

#### Descending

-   [`no-descending-specificity`](https://stylelint.io/user-guide/rules/no-descending-specificity):
    Rule disabled.

#### Empty Lines

-   [`declaration-empty-line-before`](https://stylelint.io/user-guide/rules/declaration-empty-line-before):
    The rule is disabled for `stylelint-order` to work correctly.

#### Function

-   [`function-url-no-scheme-relative`](https://stylelint.io/user-guide/rules/function-url-no-scheme-relative):
    Disallow scheme-relative **URLs**.

#### Max & Min

-   [`max-nesting-depth`](https://stylelint.io/user-guide/rules/max-nesting-depth):
    Limit the allowed nesting depth to `3`.
    Ignore: `'blockless-at-rules'`.

-   [`selector-max-combinators`](https://stylelint.io/user-guide/rules/selector-max-combinators):
    Limit the allowed combinators to `4`.

-   [`selector-max-compound-selectors`](https://stylelint.io/user-guide/rules/selector-max-compound-selectors):
    Limit the allowed compound selectors to `3`.

-   [`selector-max-universal`](https://stylelint.io/user-guide/rules/selector-max-universal):
    Limit the allowed universal selector to `1`.

#### Notation

-   [`font-weight-notation`](https://stylelint.io/user-guide/rules/font-weight-notation):
    Numeric notation for font weights.

-   [`keyframe-selector-notation`](https://stylelint.io/user-guide/rules/keyframe-selector-notation):
    Percentage notation for keyframe selectors.

#### Pattern

-   [`selector-class-pattern`](https://stylelint.io/user-guide/rules/selector-class-pattern):
    **BEM** naming convention likely enforced, encouraging modularity,
    maintainability, and clarity in class naming.

#### Selector

-   [`selector-no-qualifying-type`](https://stylelint.io/user-guide/rules/selector-no-qualifying-type):
    Disallow qualifying a selector by type.

#### Unknown

-   [`media-feature-name-value-no-unknown`](https://stylelint.io/user-guide/rules/media-feature-name-value-no-unknown):
    Disallow unknown values for media features.

-   [`no-unknown-animations`](https://stylelint.io/user-guide/rules/no-unknown-animations):
    Disallow unknown animations.

### SCSS

#### At-rule

-   [`scss/at-each-key-value-single-line`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-each-key-value-single-line):
    Each key value in the `@each` rule must be on a separate line.

-   [`scss/at-function-named-arguments`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-function-named-arguments):
    Require named parameters in **SCSS** function call rule.
    Ignore `single-argument`.

-   [`scss/at-mixin-named-arguments`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-mixin-named-arguments):
    Require named parameters in **at-mixin** call rule.
    Ignore `single-argument`.

-   [`scss/at-root-no-redundant`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-root-no-redundant):
    Disallow redundant `@at-root` rule.

-   [`scss/at-use-no-redundant-alias`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-use-no-redundant-alias):
    Disallow redundant `@at-root` rule.

#### Comment

-   [`scss/comment-no-loud`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/comment-no-loud):
    Disallow `/*`-comments.

-   [`scss/double-slash-comment-inline`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/double-slash-comment-inline):
    Disallow `//`-comments to be inline comments.

#### Declaration

-   [`scss/declaration-nested-properties`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/declaration-nested-properties):
    Disallow properties with `-` in their names to be in a form
    of a nested group.

-   [`scss/dimension-no-non-numeric-values`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/dimension-no-non-numeric-values):
    Prevents the use of non-numeric values in dimensions.

#### Dollar Variable

-   [`scss/dollar-variable-colon-newline-after`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/dollar-variable-colon-newline-after):
    Require a newline after the colon in `$`-variable declarations.

-   [`scss/dollar-variable-no-namespaced-assignment`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/dollar-variable-no-namespaced-assignment):
    Disallow assignment to namespaced variables.

-   [`scss/no-duplicate-dollar-variables`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/no-duplicate-dollar-variables):
    Disallow duplicate dollar variables within a stylesheet.

#### Function

-   [`scss/function-color-relative`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/function-color-relative):
    Encourages the use of the `scale-color()` feature instead
    of deprecated features:
    -   `darken()`
    -   `desaturate()`
    -   `fade-in()`
    -   `fade-out()`
    -   `lighten()`
    -   `opacify()`
    -   `saturate()`
    -   `transparentize()`

#### Import

-   [`scss/partial-no-import`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/partial-no-import):
    Disallow non-CSS `@imports` in partial files.

#### Maps

-   [`scss/map-keys-quotes`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/map-keys-quotes):
    Require quoted keys in **SASS** maps.

#### Media

-   [`scss/media-feature-value-dollar-variable`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/media-feature-value-dollar-variable):
    Require a media feature value be a `$`-variable.

#### Selector

-   [`scss/selector-no-redundant-nesting-selector`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/selector-no-redundant-nesting-selector):
    Disallow redundant nesting selectors (`&`).

#### Unknown

-   [`scss/property-no-unknown`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/property-no-unknown):
    Disallow unknown properties.
    Should be used instead of **Stylelint**'s `property-no-unknown`.

## License

This project is licensed under the MIT license - see the
[**LICENSE**](LICENSE) for details.
