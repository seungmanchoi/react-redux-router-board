const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
const publicPath = `http://localhost:${port}/`;
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js',
  ],
  mode: 'development',
  output: {
    path: __dirname + '/public/dist/',
    filename: 'js/bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-0']
          }
        }
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    port,
    publicPath,
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 100
    },
  },
};