'use strict';

module.exports = {
  extends: require.resolve('./base'),
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['no-inline-styles'],
  rules: {
    'no-inline-styles/no-inline-styles': 2
  }
};
