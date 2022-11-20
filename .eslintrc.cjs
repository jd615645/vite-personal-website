/* eslint-env node */
module.exports = {
  root: true,
  'env': {
    'node': true,
    'commonjs': true,
    'browser': true,
    'es6': true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
