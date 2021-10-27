module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  ignorePatterns: ['tests', '.eslintrc.js'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {},
};
