const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name],[contenthas].js'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [
          { loader: 'file-loader' }
        ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.scss|\.css$/,
        use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.m?js$/, // mjs or js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'] //  add in a lil bit of additional code just to enable some diff features for our project, such as async/await
          }
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}