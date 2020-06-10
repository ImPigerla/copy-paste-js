process.env.NODE_ENV = 'production'

let baseConfig = require('./webpack.base.config'),
  {distPath, rootPath} = require('../config'),
  webpackMerge = require('webpack-merge'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = webpackMerge(baseConfig, {
  mode: 'none',
  entry: {
    copyPaste: `${rootPath}/index.js`,
    'copyPaste.min': `${rootPath}/index.js`
  },
  output: {
    filename: '[name].js',
    libraryExport: 'default',       // 对外暴露default
    library: 'copyPaste',              // 模块名称
    libraryTarget: 'umd',           // 输出格式
    umdNamedDefine: true,            // 对UMD的构建过程中的AMD模块进行命名
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  },
  stats: {
    entrypoints: false,
    children: false
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        include: /\.min\.js$/
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin([distPath], {
      root: process.cwd()
    })
  ]
})
