import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as url from 'url'
import { Options, PythonShell } from 'python-shell'

let mainWindow: Electron.BrowserWindow | null

function sendToPython() {
  const options: Options = {
    mode: 'text',
  }

  PythonShell.run('./src/py/server.py', options, (err, results) => {
    if (err) throw err
    console.log('Python response: ', results)
  })
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 700,
    title: 'Fitness',
    backgroundColor: '#f2f2f2',
    webPreferences: {
      nodeIntegration: true, // 是否集成 Nodejs
      contextIsolation: false,
      enableRemoteModule: true,
      worldSafeExecuteJavaScript: true
      // devTools: true, // process.env.NODE_ENV !== 'prodcution',
    },
  })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000')
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file',
        slashes: true,
      })
    )
  }

  sendToPython()

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
})

app.allowRendererProcessReuse = true
