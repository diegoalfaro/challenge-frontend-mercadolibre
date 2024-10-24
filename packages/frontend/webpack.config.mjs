import "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import tsConfig from "./tsconfig.json" with { type: "json" };

const { rootDir: tsConfigRootDir, paths: tsConfigPaths } = tsConfig.compilerOptions

const tsConfigPathAliases = Object.fromEntries(
  Object.entries(tsConfigPaths).map(([alias, [toPath]]) => [
    alias.replace(/\/\*/g, ''),
    path.resolve(tsConfigRootDir, toPath.replace(/\/\*/g, '')),
  ]),
)

export default {
  mode: "development",
  entry: path.resolve("src", "index.tsx"),
  output: {
    publicPath: "/",
    path: path.resolve("dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          'url-loader'
        ],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          'url-loader'
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: tsConfigPathAliases,
    extensions: [".tsx", ".ts", ".js", ".sass", ".scss"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  devServer: {
    host: "localhost",
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:5000',
      },
    ],
  },
};
