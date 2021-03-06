module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
    mocha: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    "no-underscore-dangle": 0,
    quotes: [2, "double"],
  },
};
