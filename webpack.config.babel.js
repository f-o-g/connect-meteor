'use strict'

var webpack = require('webpack')
var env = process.env.NODE_ENV

var reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
}

var config = {
  externals: {
    'react': reactExternal
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  output: {
    library: 'connectMeteor',
    libraryTarget: 'umd'
  },
  plugins: [
    {
      apply: function apply(compiler) {
        compiler.parser.plugin('expression global', function expressionGlobalPlugin() {
          this.state.module.addVariable('global', "(function() { return this; }()) || Function('return this')()")
          return false
        })
      }
    },
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
}

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
        warnings: false
      }
    })
  )
}

module.exports = config

// const path = require('path')
// const merge = require('webpack-merge')
// const HtmlwebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')

// const TARGET = process.env.npm_lifecycle_event
// const ROOT_PATH = path.resolve(__dirname)
// const PATHS = {
//   src: path.resolve(ROOT_PATH, 'src'),
//   build: path.resolve(ROOT_PATH, 'build')
// };
// const ENV = {
//   host: process.env.HOST || 'localhost',
//   port: process.env.PORT || 8080
// };

// process.env.BABEL_ENV = TARGET

// const common = {
//   entry: PATHS.src,
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   output: {
//     path: PATHS.build,
//     filename: '[name].js',
//     publicPath: '/'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         loaders: ['babel?cacheDirectory'],
//         include: PATHS.src
//       }
//     ]
//   },
//   plugins: [
//     new HtmlwebpackPlugin({
//       template: 'src/index.tpl.html',
//       title: 'connect meteor',
//       inject: 'body',
//       filename: 'index.html'
//     })
//   ]
// }

// if (TARGET === 'start' || !TARGET) {
//   module.exports = merge(common, {
//     entry: PATHS.src,
//     devtool: 'eval-source-map',
//     devServer: {
//       historyApiFallback: true,
//       hot: true,
//       inline: true,
//       progress: true,

//       // display only errors to reduce the amount of output
//       stats: 'errors-only',

//       // parse host and port from env so this is easy
//       // to customize
//       host: ENV.host,
//       port: ENV.port
//     },
//     plugins: [
//       new webpack.HotModuleReplacementPlugin()
//     ]
//   });
// }