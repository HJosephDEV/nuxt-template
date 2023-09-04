module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: ["@nuxtjs/eslint-config-typescript", "prettier"],
  plugins: ["prettier"],
  rules: {
    "vue/no-multiple-template-root": 0
  }
};
