const path = require('path');
const webpack = require('webpack');

const config = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: __dirname + '/src',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react', 'react-hmre'] }
        }]
      },
      {
        test: /\.js?$/,
        loader: 'eslint-loader',
        include: path.resolve(process.cwd(), 'src'),
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
          fix: true,
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  devtool: 'cheap-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.devtool = '';

  // Add more configuration for production here like
  // Uglify plugin
  // Offline plugin
  // Etc
}

module.exports = config;
