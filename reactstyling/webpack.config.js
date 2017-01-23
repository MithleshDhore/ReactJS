module.exports = {
  entry: './src/main.js',

  output: {
    filename: "app.js",
    path: './build',
  },

  devtool: 'source-map',

  devServer: {
    port: 3000
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
