const {resolve} = require('path'),
  srcPath = resolve(__dirname, '../src')

module.exports = {
  rootPath: resolve(__dirname, '..'),
  srcPath: srcPath,
  distPath: resolve(__dirname, '../dist'),
}
