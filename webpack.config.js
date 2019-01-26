module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: { index: "./src/" },
  resolve: {
    extensions: [".ts", ".js", ".scss", ".sass"]
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          { loader: "to-string-loader" },
          { loader: "raw-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }]
      }
    ]
  }
};
