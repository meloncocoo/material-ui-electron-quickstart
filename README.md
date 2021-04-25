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

## MacOS & Package to dmg/pkg

### Dmg

```shell
$ yarn global add appdmg
```

Directory Structure

```text
dists->
	-- MyApp.app
	-- pack.json
```

Pack.json

```json
{
  "title": "MyApp",
  "contents": [
    { "x": 448, "y": 144, "type": "link", "path": "/Applications" },
    { "x": 192, "y": 144, "type": "file", "path": "./Material UI Electron Quick Start.app" }
  ],
  "window": {
      "size": {
          "width": 640,
          "height": 480
      }
  },
  "format": "UDBZ"
}
```

```shell
$ appdmg ./dists/pack.json ./dists/MyApp.dmg
```

format

```text
UDRW - UDIF read/write image
UDRO - UDIF read-only image
UDCO - UDIF ADC-compressed image
UDZO - UDIF zlib-compressed image
UDBZ - UDIF bzip2-compressed image (OS X 10.4+ only)
UFBI - UDIF entire image with MD5 checksum
UDTO - DVD/CD-R master for export
UDSP - SPARSE (grows with content)
UDSB - SPARSEBUNDLE (grows with content; bundle-backed)
```

### Pkg

```shell
$ pkgbuild --install-location /Applications --component ./packages/mac-arm64/Material\ UI\ Electron\ Quick\ Start.app ./packages/MyApp.pkg
```

```shell
$ python quickpkg ./packages/mac-arm64/Material\ UI\ Electron\ Quick\ Start.app --output ./packages/MyApp.pkg
```

