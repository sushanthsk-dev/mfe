module.exports = {
  module: {
    rules: [{
      test: /\.m?js$/, // mjs or js
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react','@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime'] //  add in a lil bit of additional code just to enable some diff features for our project, such as async/await
        }
      }
    }]
  }
}