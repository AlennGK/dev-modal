// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    esversion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  plugins: [
    'html',
    'vue'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'vue/no-invalid-v-if': 'error',
    'no-multiple-empty-lines': [2, {'max': 3, 'maxEOF': 1}],
    'quotes': [2, 'single'],
    'strict': [2, 'never'],
  },
};
