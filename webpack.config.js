module.exports = {
  mode: "production",
  entry: {
    lib: "./src/index"
  },
  output: {
    library: "salahtimes",
    libraryTarget: "umd",
    path: __dirname,
    filename: "salahtimes.js",
    globalObject: "this",
    umdNamedDefine: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
  }
};
