var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  module: {
      loaders: [
      { test: /\.html$/, loaders: ['react-hot', 'file-loader?name=[name].[ext]'], include: path.join(__dirname, 'src') },
      { test: /\.js$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src') },
      { test: /\.css$/, loaders: ['react-hot', 'style-loader', 'css-loader'] },
      { test: /\.png$/, loader: 'url-loader?limit=100000' },
      { test: /\.jpg$/, loader: 'file-loader?name=/images/[name].[ext]' },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?name=/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff' }, //
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=/fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?name=/fonts/[name].[ext]' }, //
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?name=/fonts/[name].[ext]&limit=10000&mimetype=image/svg+xml'}//
    ]
  },
  devServer: {
      proxy: {
        '/api':{
          target: 'http://localhost:8080' 
        }
    }
  }
};
