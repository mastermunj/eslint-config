# @mastermunj/eslint-config

[![npm version](https://img.shields.io/npm/v/@mastermunj/eslint-config.svg)](https://www.npmjs.com/package/@mastermunj/eslint-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The base ESLint configuration used across my TypeScript packages.

## Features

* [TypeScript ESLint](https://typescript-eslint.io/) for TypeScript linting
* [Prettier](https://prettier.io/) integration for code formatting
* [ESLint Stylistic](https://eslint.style/) for stylistic rules
* [ESLint Plugin Unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) for opinionated best practices
* Strict error rules for common JavaScript pitfalls
* Consistent naming conventions and code style

## Installation

```sh
npm install --save-dev @mastermunj/eslint-config eslint prettier
```

## Usage

Create an `eslint.config.js` file in your project root:

```javascript
import { configPkg } from '@mastermunj/eslint-config';

export default configPkg();
```

### Custom Configuration

You can extend the base configuration with your own rules:

```javascript
import { configPkg } from '@mastermunj/eslint-config';

export default configPkg(
  {
    rules: {
      // Your custom rules here
    },
  }
);
```

### Using Exported Constants

The package also exports useful constants that you can use:

```javascript
import {
  configPkg,
  INCLUDE_LIST,
  GLOBAL_IGNORE_LIST,
  PLUGINS_LIST,
  RULES_LIST,
} from '@mastermunj/eslint-config';

export default configPkg(
  {
    files: ['**/*.js'],
    rules: {
      // Override specific rules
    },
  }
);
```

## Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## License

[MIT](LICENSE)
