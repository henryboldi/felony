import webpack from 'webpack'
import baseConfig from './webpack.config.base'

export default {
  ...baseConfig,

  devtool: 'source-map',

  entry: [
    './main.development',
  ],

  output: {
    path: __dirname,
    filename: './main.js',
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.BannerPlugin(
      'require("source-map-support").install();',
      { raw: true, entryOnly: false }
    ),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],

  target: 'electron-renderer',

  node: {
    __dirname: false,
    __filename: false,
  },

  externals: [
    'keytar',
    'openpgp',
    'font-awesome',
    'source-map-support',
  ],
}
