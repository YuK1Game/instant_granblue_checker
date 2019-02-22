// webpack.confing.js

const path = require('path')
const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app : './src/app.js',
    serviceworker : './src/serviceworker/ServiceWorker.js',
  },
  output: {
    path: path.resolve(__dirname, './public/assets/js/'),
    filename: '[name].build.min.js'
  },
  plugins : [
    new WriteFilePlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          babelrc: false,
          presets: [
            ['@babel/preset-env', {
              useBuiltIns : 'usage',
              targets : {
                browsers : [
                  'last 2 versions',
                  'ie >= 11',
                ],
              },
            }],
            '@babel/preset-react',
          ],
          plugins: [
            ['@babel/plugin-proposal-decorators', {
              legacy: true
            }],
            ['@babel/plugin-proposal-class-properties', {
              loose: true
            }],
            ['@babel/plugin-transform-runtime', {
              regenerator : true,
            }],
          ]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico|woff|woff2|eot|ttf|svg)$/,
        use: ['url-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    disableHostCheck: true,
    contentBase: path.join(__dirname, './public'),
    compress: true,
    port: 9000
  }
}