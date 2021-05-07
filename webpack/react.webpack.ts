import * as path from 'path'
import * as webpack from 'webpack'
import baseConfig from './base.webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const rootPath = path.resolve(__dirname, "..")

const config = {
  ...baseConfig({
    resolve: {
      mainFields: ['browser', 'module', 'main'],
      fallback: {
        "zlib": require.resolve("browserify-zlib"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "util": require.resolve("util/"),
        "assert": require.resolve("assert/"),
        "stream": require.resolve("stream-browserify"),
      }
    },
    entry: path.resolve(rootPath, 'src/renderer', 'index.tsx'),
    target: ['web', 'electron-renderer'],
    output: {
      path: path.resolve(rootPath, 'dist/renderer'),
      filename: 'js/[name].js',
      publicPath: './',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.less$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  modifyVars: {

                  },
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
    node: {
      global: true,
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],
  }),
  devServer: {
    contentBase: path.join(rootPath, 'dist/renderer'),
    publicPath: '/',
    compress: true,
    port: 4000,
  },
};

export default config