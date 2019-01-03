const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const config = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "public", "dist"),
    filename: "bundle.js",
    chunkFilename: "vendor.bundle.js"
  },
  // devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: "localhost",
      port: 3000,
      server: { baseDir: ["public", "build"] }
    })
  ]
};

module.exports = config;
