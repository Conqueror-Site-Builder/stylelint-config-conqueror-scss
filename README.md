# Stylelint Config Archoleat SCSS

![ESM Only](https://img.shields.io/badge/ESM-only-gray?labelColor=fe0)
![Commitlint](https://img.shields.io/github/actions/workflow/status/Archoleat/core/commitlint.yml?label=Commitlint)
![CodeQL](https://img.shields.io/github/actions/workflow/status/Archoleat/stylelint-config-extended-scss/codeql.yml?label=CodeQL)
![Test](https://img.shields.io/github/actions/workflow/status/Archoleat/stylelint-config-extended-scss/mocha.yml?label=Test)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/Archoleat/stylelint-config-extended-scss/editorconfig.yml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/Archoleat/stylelint-config-extended-scss/prettier.yml?label=Prettier)
![Markdown](https://img.shields.io/github/actions/workflow/status/Archoleat/stylelint-config-extended-scss/markdown.yml?label=Markdown)
![ESLint](https://img.shields.io/github/actions/workflow/status/Archoleat/stylelint-config-extended-scss/eslint.yml?label=ESLint)
![NPM Downloads](https://img.shields.io/npm/dm/%40archoleat%2Fstylelint-config-extended-scss)
![NPM Version](https://img.shields.io/npm/v/%40archoleat%2Fstylelint-config-extended-scss)

## Table of Contents

-   [Table of Contents](#table-of-contents)

-   [Features](#features)
    -   [Extends](#extends)
    -   [Plugins](#plugins)
    -   [Pseudo Elements and Classes](#pseudo-elements-and-classes)
    -   [Rules](#rules)
    -   [Naming Pattern](#naming-pattern)
    -   [Key Points](#key-points)

-   [Additions](#additions)
    -   [Husky](#husky)

-   [Authors](#authors)

-   [Contributors](#contributors)

-   [Contributing](#contributing)

-   [Versioning](#versioning)

-   [License](#license)

## Extended Config for Stylelint With Property Sorting

This project is built on [**Archoleat Repo Template**](https://github.com/Archoleat/archoleat-repo-template).

> \[!TIP]
> Nice addition for [**Archoleat**](https://github.com/Archoleat/archoleat)!

## Features

### Extends

-   **`stylelint-config-standard-scss`**: Provides a baseline for common CSS
    best practices and SCSS consistency.

### Plugins

-   **`stylelint-high-performance-animation`**: Optimizes animation performance
    by identifying potential issues and suggesting best practices.

-   **`stylelint-order`**: Enforces consistent property ordering within
    declarations, sorting over 480+ rules to enhance readability
    and maintainability.

    > Blocks @func() top, but blocks @func() { smth code} bottom

-   **`stylelint-plugin-defensive-css`**: Promotes robust CSS by identifying
    potential vulnerabilities and cross-browser inconsistencies.

-   **`stylelint-plugin-logical-css`**: Encourages the use of logical
    properties for improved accessibility and flexibility in
    direction-aware layouts.

    > future version all old properties will be remove

-   **`stylelint-prettier`**: Integrates **Prettier** for
    consistent code formatting.

### Pseudo Elements and Classes

-   Supports **20+** pseudo elements and **65+** pseudo classes
    for diverse styling needs.

    > Experimental and non-standard pseudo classes and
    > elements are used in the config.

### Naming Pattern

**BEM** naming convention likely enforced, encouraging modularity,
maintainability, and clarity in class naming.

### Key Points

-   Comprehensive configuration addressing performance, maintainability,
    accessibility, and best practices.

-   Leverages a solid foundation from **`stylelint-config-standard-scss`**
    with valuable plugins.

-   Enforces consistent code style and naming conventions for better
    readability and collaboration.

-   Sorts **over 400 properties** using the **`stylelint-order`** plugin for
    enhanced clarity and maintainability.

    > Experimental and non-standard properties are used in the config.

## Additions

### Husky

This repository uses **.husky** as a submodule.
**.husky** runs **`pre-commit`** hook and **`commit-msg`**.

## Authors

See also the list of [**Authors**](AUTHORS.md).

## Contributors

If you want to improve something, you can write about it
[**here**](https://github.com/Archoleat/stylelint-config-extended-scss/issues/new/choose).

You can also view a list of [**Contributors**](CONTRIBUTORS.md).

## Contributing

Please read [**Contributing**](CONTRIBUTING.md)
and [**Code of Conduct**](CODE_OF_CONDUCT.md) for details,
and the process for submitting **Pull Request** to us.

## Versioning

We use [**SemVer**](https://semver.org) for versioning.
You can see the available versions
[**here**](https://github.com/Archoleat/stylelint-config-extended-scss/tags).

## License

This project is licensed under the MIT license - see the
[**LICENSE**](LICENSE) for details.
