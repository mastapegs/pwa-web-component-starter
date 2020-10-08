const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')

const htmlFiles = [
  {
    filename: 'index.html',
  },
  {
    filename: 'about/index.html',
  },
  {
    filename: 'contact/index.html',
  },
  {
    filename: 'list/index.html',
  },
]

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackPwaManifest({
      name: "PWA Web Component Starter",
      short_name: "PWA Starter",
      description: 'PWA Starter',
      start_url: "index.html",
      display: "standalone",
      background_color: "#154c69",
      theme_color: "#154c69",
      orientation: "portrait-primary"
    }),
    ...htmlFiles.map(({ filename }) => new HtmlWebpackPlugin({
      filename,
      template: './src/index.html',
    })),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}