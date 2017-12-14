module.exports = {
  entry: "./lecture.js",
  output: {
    filename: "./dist/bundle.js"
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
