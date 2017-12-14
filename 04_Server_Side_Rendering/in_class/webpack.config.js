const clientConfig = {
  entry: "./src/index.js",
  output: {
    filename: "dist/client.bundle.js"
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

const serverConfig = {
  entry: "./serverRendering.js",
  output: {
    filename: "dist/server.bundle.js",
    libraryTarget: "commonjs2"
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

module.exports = [
  clientConfig,
  serverConfig
];
