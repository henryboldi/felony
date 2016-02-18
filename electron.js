'use strict'

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const windowStateKeeper = require('electron-window-state')

let mainWindow

function createWindow() {
  let mainWindowState = windowStateKeeper({
    defaultWidth: 300,
    defaultHeight: 420,
  })

  mainWindow = new BrowserWindow({
    'x': mainWindowState.x,
    'y': mainWindowState.y,
    'width': mainWindowState.width,
    'height': mainWindowState.height,
    'title-bar-style': 'hidden',
    title: 'Felony',
  })
  mainWindow.loadURL('file://' + __dirname + '/src/index.html')

  mainWindowState.manage(mainWindow)

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
