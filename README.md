# eslint-config-benjamin

[![Build Status](https://app.travis-ci.com/BenjaminSimode/eslint-config-benjamin.svg?branch=main)](https://app.travis-ci.com/BenjaminSimode/eslint-config-benjamin)

## Quick start

1. Install the following dev-dependencies:

    ```
    yarn add -D \
      eslint-config-benjamin \
      eslint \
      eslint-plugin-node
    ```

2. Extend the `eslint-config-benjamin` config in your `.eslintrc` (or `eslintConfig` key in your `package.json`):

    ```json
    "eslintConfig": {
      "extends": "eslint-config-benjamin"
    }
    ```

3. Specify the version of Node.js your project uses by setting `.engines.node` in your `package.json`.

    ```json
    "engines": {
      "node": ">=8"
    }
    ```

4. Run `eslint` on your project as part of your `lint:js` scripts:

    ```json
    "scripts": {
      "lint:js": "yarn run eslint --cache --ext .js --ignore-path .gitignore ./resources/",
    }
    ```

## Usage

---

The "Quick start" above exemplifies usage of this package with standard Node.js code.

Depending on the ECMAScript version of your code, whether you are using non-standard syntax like Flow and React's JSX,
or other considerations, you may want to extend a variety of configurations provided by this
package. `eslint-config-mapbox` exposes several configurations targeting specific ESLint plugins, each named after the
plugin it targets.

To use each plugin-specific configuration, you'll need to do the following:

- Install as dev-dependencies `eslint-config-benjamin`, `eslint`, and any plugins that are used by the configuration(s)
  you are extending, such as `eslint-plugin-node` or `eslint-plugin-promise`.
- Add the configuration(s) you are using to the `"extends"` array in your project's ESLint configuration, like this:

    ```json
    {
      "extends": [
        "eslint-config-benjamin/import",
        "eslint-config-benjamin/promise"
      ]
    }
    ```

### Plugin-specific configurations

- [`eslint-config-benjamin`**`/node`**](./node.js)
    - Depends on [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node).
    - For Node.js and CommonJS.
    - Specify the version of Node.js your project uses by either setting `.engines.node` in your `package.json`, or by
      extending an LTS-version-specific ESLint configuration: **`node14`**.
- [`eslint-config-benjamin`**`/import`**](./import.js)
    - Depends on [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import).
    - For ES2015 modules (`import` and `export`).
- [`eslint-config-benjamin`**`/promise`**](./promise.js)
    - Depends on [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise).
    - For `Promise`s.
- [`eslint-config-benjamin`**`/xss`**](./xss.js)
    - Depends on [eslint-plugin-xss](https://github.com/Rantanen/eslint-plugin-xss).
    - For avoiding potential XSS issues in front end JavaScript.
    - Does not perform any JavaScript style linting if used on its own.

### With Prettier

If you are using [Prettier](https://prettier.io/) to format your JS,
install [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) and add it at the end of
your `"extends"` array. It will turn off all ESLint rules related to the code-style preferences that Prettier already
addresses.
