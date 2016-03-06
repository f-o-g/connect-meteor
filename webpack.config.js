const path = require('path')
const merge = require('webpack-merge')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const pkg = require('./package.json')

const TARGET = process.env.npm_lifecycle_event
const ROOT_PATH = path.resolve(__dirname)
const PATHS = {
  src: path.resolve(ROOT_PATH, 'src'),
  build: path.resolve(ROOT_PATH, 'build')
};
const ENV = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080
};

process.env.BABEL_ENV = TARGET

const common = {
  entry: PATHS.src,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    publicPath:'/'
  },
  module: {
    // It's giving errors when used with flow
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.src
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.src
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: 'src/index.tpl.html',
      title: 'connect meteor',
      inject: 'body',
      filename: 'index.html'
    })
  ]
}

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    entry: PATHS.src,
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // display only errors to reduce the amount of output
      stats: 'errors-only',

      // parse host and port from env so this is easy
      // to customize
      host: ENV.host,
      port: ENV.port
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}