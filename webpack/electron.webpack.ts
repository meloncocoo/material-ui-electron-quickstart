import * as path from 'path'
import baseConfig from './base.webpack'

const rootPath = path.resolve(__dirname, '..')

const config = baseConfig({
  target: 'electron-main',
  entry: path.resolve(rootPath, 'src/electron', 'main.ts'),
  node: {
    __dirname: false,
  },
  output: {
    path: path.resolve(rootPath, 'dist'),
    filename: '[name].js',
  },
})

export default config;
