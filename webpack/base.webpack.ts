import { Configuration } from 'webpack'

const config = ({resolve, output, module: { rules = [] } = {}, ...restProp}: Configuration): Configuration => ({
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    ...resolve,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      ...rules,
    ],
  },
  watchOptions: {
    ignored: ['**/node_modules'],
  },
  output: {
    clean: true,
    ...output,
  },
  ...restProp,
})

export default config;