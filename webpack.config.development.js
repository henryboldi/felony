/* eslint max-len: 0 */
import webpack from 'webpack'
import baseConfig from './webpack.config.base'
import nodeExternals from 'webpack-node-externals'

const config = {
  ...baseConfig,

  debug: true,

  devtool: 'cheap-module-eval-source-map',

  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    './app/index',
  ],

  output: {
    ...baseConfig.output,
    publicPath: 'http://localhost:3000/dist/',
  },

  module: {
    ...baseConfig.module,
    loaders: [
      ...baseConfig.module.loaders,

      {
        test: /\.global\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
        ],
      },

      {
        test: /^((?!\.global).)*\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },

  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],

  target: 'electron-renderer',

  externals: [
    nodeExternals({
      whitelist: ['webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr', 'normalize.css'],
    }),

    // put your node 3rd party libraries which can't be built with webpack here
    // (mysql, mongodb, and so on..)
  ],
}

export default config
