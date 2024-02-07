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

> Extended Config for Stylelint With Property Sorting

## Table of Contents

-   [This Config](#this-config)
-   [Installation](#installation)
-   [Usage](#usage)
-   [License](#license)

## This Config

-   Extends the [**`stylelint-config-standard-scss`** shared config](https://github.com/stylelint-scss/stylelint-config-standard-scss)
    and configures its rules for **SCSS**.

-   **BEM** naming convention likely enforced, encouraging modularity,
    maintainability, and clarity in class naming.

-   Experimental and non-standard pseudo classes, pseudo elements and properties
    are used in the config.

    > Don't worry, it doesn't have any side effects of any kind.

-   Sorts **over 400 properties** using the **`stylelint-order`** plugin for
    enhanced clarity and maintainability.

-   **`stylelint-plugin-logical-css`** replace some properties
    with logical alternatives.

-   **`stylelint-high-performance-animation`** enhances your animations.

-   **`stylelint-plugin-defensive-css`** for enforcing defensive **CSS**
    best practices.

-   **`stylelint-gamut`** throw warning if color goes out of **sRGB**
    color space and is not wrapped in **`@media (color-gamut: p3) {}`**
    or **`@media (color-gamut: rec2020) {}`**

## Installation

```bash
npm i -D @archoleat/stylelint-config-extended-scss
```

## Usage

```js
export default {
  extends: '@archoleat/stylelint-config-extended-scss',
};
```

## License

This project is licensed under the MIT license - see the
[**LICENSE**](LICENSE) for details.
