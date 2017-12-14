module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "./bundle.js"
  },
  module: {
    loaders: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
