module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    '@babel/env'
  ],
  plugins: [
    'lodash',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-dynamic-import'
  ],
};
