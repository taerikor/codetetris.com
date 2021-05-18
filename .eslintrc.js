module.exports = {
  env: {
    browser: true,
    es7: true,
  },
  plugins: ["react"],
  globals: {
    graphql: false,
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
}
