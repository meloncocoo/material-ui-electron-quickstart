# Material UI & Electron Quickstart

## Install

### Npm

```shell
$ npm install
```

### Yarn

```shell
$ yarn install
```

## Loader

### css loader & less loader

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

### font loader

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

## Package

### Package to dmg/pkg for MacOS

```json
// pakcage.json
{
  // other
  "build": {
    "appId": "com.mln.${name}",
    "productName": "Material UI Electron Quickstart",
    "mac": {
      "category": "melon.electron",
      "type": "distribution",
      "target": [
        "pkg",
        "dmg",
        "zip"
      ]
    },
    "directories": {
      "output": "release"
    },
    "files": [
      "package.json",
      "dist/**"
    ]
  },
  "script": {
    // other
    "build": "npm-run-all build:electron build:react",
    "build:run": "npm-run-all build start:electron",
    "build:electron": "webpack --config webpack/electron.webpack.ts --mode=production",
    "build:react": "webpack --config webpack/react.webpack.ts --mode=production",
    "package": "npm-run-all build package:build",
    "package:release": "npm-run-all build package:dist",
    "package:build": "electron-builder --dir",
    "package:dist": "electron-builder"
  }
  // other
}
```

```shell
$ yarn package // for unpack
$ yarn package:release // for release
```



