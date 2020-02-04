module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    lib: "./src/index"
  },
  output: {
    library: "salahtimes",
    libraryTarget: "umd",
    path: __dirname,
    filename: "salahtimes.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
  }
};
