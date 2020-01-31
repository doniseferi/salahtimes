module.exports = {
  mode: "production",
  devtool: 'source-map',
  entry: {
    lib: "./src/index"
  },
  output: {
    library: "suntimes",
    libraryTarget: "umd",
    filename: "prayertimes.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
  }
};
