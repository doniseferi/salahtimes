const TypedocWebpackPlugin = require("typedoc-webpack-plugin");

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
    filename: "salahtimes.js",
    globalObject: "this",
    umdNamedDefine: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
  },
  plugins: [
    new TypedocWebpackPlugin({
        name: 'Contoso',
        mode: 'file',
        json: './docs.json'
    })
]
};
