const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
]

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...htmlFiles.map(({ filename }) => new HtmlWebpackPlugin({ filename })),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}