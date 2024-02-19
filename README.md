# Stylelint Config Extended SCSS

![ESM Only](https://img.shields.io/badge/ESM-only-gray?labelColor=fe0)
![NPM Version](https://img.shields.io/npm/v/%40archoleat%2Fstylelint-config-extended-scss)
![Test](https://img.shields.io/github/actions/workflow/status/Archoleat/stylelint-config-extended-scss/mocha.yml?label=Test)
![NPM Downloads](https://img.shields.io/npm/dm/%40archoleat%2Fstylelint-config-extended-scss)
![Commitlint](https://img.shields.io/github/actions/workflow/status/Archoleat/core/commitlint.yml?label=Commitlint)
![CodeQL](https://img.shields.io/github/actions/workflow/status/Archoleat/stylelint-config-extended-scss/codeql.yml?label=CodeQL)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/Archoleat/stylelint-config-extended-scss/editorconfig.yml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/Archoleat/stylelint-config-extended-scss/prettier.yml?label=Prettier)
![Markdown](https://img.shields.io/github/actions/workflow/status/Archoleat/stylelint-config-extended-scss/markdown.yml?label=Markdown)
![ESLint](https://img.shields.io/github/actions/workflow/status/Archoleat/stylelint-config-extended-scss/eslint.yml?label=ESLint)

> Extended Shareable Config for Stylelint With Property Sorting

## Table of Contents

-   [This Config](#this-config)
    -   [Extends](#extends)
    -   [Plugins](#plugins)
    -   [Rules](#rules)

-   [Installation](#installation)

-   [Usage](#usage)

-   [License](#license)

## This Config

### Extends

-   Extends the [**`stylelint-config-standard-scss`** shared config](https://github.com/stylelint-scss/stylelint-config-standard-scss)
    and configures it's rules for **SCSS**.

### Plugins

-   [**`stylelint-declaration-block-no-ignored-properties`**](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties)
    disallow property values that are ignored due to another
    property value in the same rule.

    > Use **`.browserslistrc`**.

-   [**`stylelint-gamut`**](https://github.com/fpetrakov/stylelint-gamut)
    throw warning if color goes out of **sRGB**
    color space and is not wrapped in **`@media (color-gamut: p3) {}`**
    or **`@media (color-gamut: rec2020) {}`**

-   [**`stylelint-group-selectors`**](https://github.com/ssivanatarajan/stylelint-group-selectors)
    identify the selectors, which can be grouped,
    as they have same set of properties and values.

-   [**`stylelint-high-performance-animation`**](https://github.com/kristerkari/stylelint-high-performance-animation)
    enhances your animations.

-   [**`stylelint-no-unsupported-browser-features`**](https://github.com/ismay/stylelint-no-unsupported-browser-features)
    disallow features that aren't supported by your target browser audience.

-   [**`stylelint-order`**](https://github.com/hudochenkov/stylelint-order)
    sorts **over 400 properties** for enhanced clarity and maintainability.

    > Properties are grouped into logical groups and separated by a space.

-   [**`stylelint-plugin-defensive-css`**](https://github.com/yuschick/stylelint-plugin-defensive-css)
    for enforcing defensive **CSS** best practices.

-   [**`stylelint-plugin-logical-css`**](https://github.com/yuschick/stylelint-plugin-logical-css)
    replace properties with logical alternatives.

-   [**`stylelint-prettier`**](https://github.com/prettier/stylelint-prettier)
    runs **Prettier** as a **Stylelint** rule and reports
    differences as individual Stylelint issues.

### Rules

-   **BEM** naming convention likely enforced, encouraging modularity,
    maintainability, and clarity in class naming.

-   Experimental and non-standard pseudo classes, pseudo elements and properties
    are used in the config.

    > Don't worry, it doesn't have any side effects of any kind.

## Installation

With npm
```shell
npm i -D @archoleat/stylelint-config-extended-scss
```

pnpm
```shell
pnpm i -D @archoleat/stylelint-config-extended-scss
```

or yarn
```shell
yarn add -D @archoleat/stylelint-config-extended-scss
```

## Usage

```js
// stylelint.config.js
export default {
  extends: '@archoleat/stylelint-config-extended-scss',
};
```

## License

This project is licensed under the MIT license - see the
[**LICENSE**](LICENSE) for details.
