# Material UI & Electron Quickstart

## css loader & less loader

```shell
$ yarn add -D css-loader less less-loader style-loader
```
webpack.config.js
```javascript
const path = require('path')
const rootPath = path.resolve(__dirname, '..')

module.exports = {
  entry: path.resolve(rootPath, './src/renderer', 'index.tsx'),
  output: {
    // ...
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ]
  }
}
```

## font loader

webpack.config.js
```javascript
module.exports = {
  // other config
  module: {
    rules: [
      // other rules
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
      // other rules
    ]
  }
  // other config
}
```