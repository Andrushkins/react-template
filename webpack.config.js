const path = require('path');
const webpack = require('webpack');

const config = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: __dirname + '/src'
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
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ],
  },
  devtool: 'eval-source-map'
};

// if (module.hot) {
//   module.hot.accept();
// }

if (process.env.NODE_ENV === 'production') {
  config.devtool = '';

  // Add more configuration for production here like
  // Uglify plugin
  // Offline plugin
  // Etc,
}

module.exports = config;
