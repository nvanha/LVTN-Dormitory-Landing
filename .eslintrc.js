const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.js',
          '.jsx',
          '.scss',
        ],
      },
    ],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-indent': [
      'error',
      2,
    ],
    'react/forbid-prop-types': [
      'error',
      {
        forbid: [],
      },
    ],
    'no-console': 'off',
    'no-alert': 'off',
    'consistent-return': 'off',
    'no-else-return': 'off',
    'react/static-property-placement': 'off',
    'array-callback-return': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-did-update-set-state': 'off',
    radix: 'off',
    'max-len': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    camelcase: 'off',
    'no-shadow': 'off',
    'no-unused-expressions': 'off',
    'no-param-reassign': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-nested-ternary': 'off',
    'no-confusing-arrow': 'off',
    'dot-notation': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'no-use-before-define': 'off',
    'default-case': 'off',
    'react/no-array-index-key': 'off',
    'linebreak-style': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [
          'src',
        ],
      },
      alias: {
        map: [
          ['~', path.join(__dirname, 'src')],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
