module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    lib: "./src/index"
  },
  output: {
    library: "lib",
    libraryTarget: "umd",
    filename: "[name].js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
  }
};
