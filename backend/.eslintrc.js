const tsEslint = require('./eslint-config/ts-eslint');

module.exports = {
  ...tsEslint,
  root: true,
  env: {
    node: true,
    jest: true,
  },
};
