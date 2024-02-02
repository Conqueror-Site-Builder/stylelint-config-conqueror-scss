# Stylelint Config Conqueror SCSS

![ESM Only](https://img.shields.io/badge/ESM-only-gray?labelColor=fe0)
![CodeQL](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/stylelint-config-conqueror-scss/codeql.yml?label=CodeQL)
![Test](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/stylelint-config-conqueror-scss/mocha.yml?label=Test)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/stylelint-config-conqueror-scss/editorconfig.yml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/stylelint-config-conqueror-scss/prettier.yml?label=Prettier)
![Markdown](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/stylelint-config-conqueror-scss/markdown.yml?label=Markdown)
![ESLint](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/stylelint-config-conqueror-scss/eslint.yml?label=ESLint)

## Table of Contents

-   [Table of Contents](#table-of-contents)
-   [Getting Started](#getting-started)
-   [Features](#features)
-   [Package.json scripts](#packagejson-scripts)
-   [Husky](#husky)
-   [Authors](#authors)
-   [Contributors](#contributors)
-   [Contributing](#contributing)
-   [Versioning](#versioning)
-   [License](#license)
-   [Acknowledgments](#acknowledgments)

> \[!TIP]
> Nice addition for [**Conqueror**](https://github.com/Conqueror-Site-Builder/conqueror)
> or [**Conqueror Repo Template**](https://github.com/Conqueror-Site-Builder/conqueror-repo-template)!

## Getting Started

## Features

## Package.json scripts

-   **`init`**: Installs dependencies, **Husky** and update submodules.

-   **`format`**: Runs **Prettier** with the **`--write`** flag
    for all files.

-   **`lint:formatting`**: Runs **Prettier** with the **`--check`** flag
    for all files.

    > In the [**`prettier.yml`**](https://github.com/Conqueror-Site-Builder/stylelint-config-conqueror-scss/blob/main/.github/workflows/prettier.yml)
    >
    > Also run with a **`pre-commit`** hook.

-   **`lint:editorconfig`**: Runs **Editorconfig Checker** and
    checks all files in the project.

    > Also runs with the [**`editorconfig.yml`**](https://github.com/Conqueror-Site-Builder/stylelint-config-conqueror-scss/blob/main/.github/workflows/editorconfig.yml)
    > workflow.

-   **`lint:md`**: Runs **Remark** with the **`--quiet`** flag and
    checks all **markdown** files.

    > Also runs with the [**`markdown.yml`**](https://github.com/Conqueror-Site-Builder/stylelint-config-conqueror-scss/blob/main/.github/workflows/markdown.yml)
    > workflow.

-   **`lint:ts`**: Runs **ESLint** with the flag **`--fix`**
    for all **TypeScript** files.

    > Runs with the [**`eslint.yml`**](https://github.com/Conqueror-Site-Builder/stylelint-config-conqueror-scss/blob/main/.github/workflows/eslint.yml)
    > workflow.
    >
    > Also run with a **`pre-commit`** hook.

-   **`test`**: Runs **Mocha** and the tests in the **specs/** folder.

    > Also runs using the [**`mocha.yml`**](https://github.com/Conqueror-Site-Builder/stylelint-config-conqueror-scss/blob/main/.github/workflows/mocha.yml)
    > workflow.

-   **`commit`**: Runs **Commitizen**, **Commitlint**, and **Husky** to
    create commits according to **Conventional Commits** standards.

## Husky

This repository uses **.husky** as a submodule.
**.husky** runs `pre commit` hook and `lint commit message`.

## Authors

See also the list of [**Authors**](AUTHORS.md).

## Contributors

If you want to improve something, you can write about it
[**here**](https://github.com/Conqueror-Site-Builder/stylelint-config-conqueror-scss/issues/new/choose).

You can also view a list of [**Contributors**](CONTRIBUTORS.md).

## Contributing

Please read [**Contributing**](CONTRIBUTING.md)
and [**Code of Conduct**](CODE_OF_CONDUCT.md) for details,
and the process for submitting **Pull Request** to us.

## Versioning

We use [**SemVer**](https://semver.org) for versioning.
You can see the available versions
[**here**](https://github.com/Conqueror-Site-Builder/stylelint-config-conqueror-scss/tags).

## License

This project is licensed under the MIT license - see the
[**LICENSE**](LICENSE) for details.

## Acknowledgments

Thanks to everyone who takes part in the development of the project.
