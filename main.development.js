import { app, BrowserWindow, Menu, shell, autoUpdater } from 'electron' // eslint-disable-line
import open from 'open'

const { version } = require('./package.json')

let menu
let template
let mainWindow = null

const feedUrl = `https://felony-app-update.herokuapp.com/update/${ process.platform }_${ process.arch }/${ version }`

if (process.env.NODE_ENV !== 'development') {
  autoUpdater.setFeedURL(feedUrl)

  try {
    let check = true

    autoUpdater.checkForUpdates()
    setInterval(() => {
      if (check) {
        autoUpdater.checkForUpdates()
      }
    }, 120000)

    autoUpdater.on('checking-for-update', () => {
      check = false
    })

    autoUpdater.on('update-available', () => {
      // Update
    })

    autoUpdater.on('update-not-available', () => {
      // No update
    })

    autoUpdater.on('update-downloaded', () => {
      // TODO: ask before installing
      autoUpdater.quitAndInstall()
    })
  } catch (err) {
    console.log('error', err) // eslint-disable-line no-console
  }
}


const createWindow = () => {
  mainWindow = new BrowserWindow({
    'show': false,
    'resizable': false,
    'width': 295,
    'height': 435,
    'titleBarStyle': 'hidden',
  })

  mainWindow.loadURL(`file://${ __dirname }/app/app.html`)

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show()
    mainWindow.focus()
  })

  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault()
    open(url)
  })
  mainWindow.on('closed', () => {
    mainWindow = null
  })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.openDevTools()
  }

  if (process.platform === 'darwin') {
    template = [{
      label: 'Electron',
      submenu: [{
        label: 'About Felony',
        selector: 'orderFrontStandardAboutPanel:',
      }, {
        type: 'separator',
      }, {
        label: 'Services',
        submenu: [],
      }, {
        type: 'separator',
      }, {
        label: 'Hide Felony',
        accelerator: 'Command+H',
        selector: 'hide:',
      }, {
        label: 'Hide Others',
        accelerator: 'Command+Shift+H',
        selector: 'hideOtherApplications:',
      }, {
        label: 'Show All',
        selector: 'unhideAllApplications:',
      }, {
        type: 'separator',
      }, {
        label: 'Quit',
        accelerator: 'Command+Q',
        click() {
          app.quit()
        },
      }],
    }, {
      label: 'Edit',
      submenu: [{
        label: 'Undo',
        accelerator: 'Command+Z',
        selector: 'undo:',
      }, {
        label: 'Redo',
        accelerator: 'Shift+Command+Z',
        selector: 'redo:',
      }, {
        type: 'separator',
      }, {
        label: 'Cut',
        accelerator: 'Command+X',
        selector: 'cut:',
      }, {
        label: 'Copy',
        accelerator: 'Command+C',
        selector: 'copy:',
      }, {
        label: 'Paste',
        accelerator: 'Command+V',
        selector: 'paste:',
      }, {
        label: 'Select All',
        accelerator: 'Command+A',
        selector: 'selectAll:',
      }],
    }, {
      label: 'View',
      submenu: (process.env.NODE_ENV === 'development') ? [{
        label: 'Reload',
        accelerator: 'Command+R',
        click() {
          mainWindow.restart()
        },
      }, {
        label: 'Toggle Full Screen',
        accelerator: 'Ctrl+Command+F',
        click() {
          if (mainWindow) {
            mainWindow.setFullScreen(!mainWindow.isFullScreen())
          }
        },
      }, {
        label: 'Toggle Developer Tools',
        accelerator: 'Alt+Command+I',
        click() {
          mainWindow.toggleDevTools()
        },
      }] : [{
        label: 'Toggle Full Screen',
        accelerator: 'Ctrl+Command+F',
        click() {
          if (mainWindow) {
            mainWindow.setFullScreen(!mainWindow.isFullScreen())
          }
        },
      }],
    }, {
      label: 'Window',
      submenu: [{
        label: 'Minimize',
        accelerator: 'Command+M',
        selector: 'performMiniaturize:',
      }, {
        label: 'Close',
        accelerator: 'Command+W',
        selector: 'performClose:',
      }, {
        type: 'separator',
      }, {
        label: 'Bring All to Front',
        selector: 'arrangeInFront:',
      }],
    }, {
      label: 'Help',
      submenu: [{
        label: 'Learn More',
        click() {
          shell.openExternal('http://electron.atom.io')
        },
      }, {
        label: 'Documentation',
        click() {
          shell.openExternal('https://github.com/atom/electron/tree/master/docs#readme')
        },
      }, {
        label: 'Community Discussions',
        click() {
          shell.openExternal('https://discuss.atom.io/c/electron')
        },
      }, {
        label: 'Search Issues',
        click() {
          shell.openExternal('https://github.com/atom/electron/issues')
        },
      }],
    }]

    menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
  } else {
    template = [{
      label: '&File',
      submenu: [{
        label: '&Open',
        accelerator: 'Ctrl+O',
      }, {
        label: '&Close',
        accelerator: 'Ctrl+W',
        click() {
          mainWindow.close()
        },
      }],
    }, {
      label: '&View',
      submenu: (process.env.NODE_ENV === 'development') ? [{
        label: '&Reload',
        accelerator: 'Ctrl+R',
        click() {
          mainWindow.restart()
        },
      }, {
        label: 'Toggle &Full Screen',
        accelerator: 'F11',
        click() {
          if (mainWindow) {
            mainWindow.setFullScreen(!mainWindow.isFullScreen())
          }
        },
      }, {
        label: 'Toggle &Developer Tools',
        accelerator: 'Alt+Ctrl+I',
        click() {
          mainWindow.toggleDevTools()
        },
      }] : [{
        label: 'Toggle &Full Screen',
        accelerator: 'F11',
        click() {
          if (mainWindow) {
            mainWindow.setFullScreen(!mainWindow.isFullScreen())
          }
        },
      }],
    }, {
      label: 'Help',
      submenu: [{
        label: 'Learn More',
        click() {
          shell.openExternal('http://electron.atom.io')
        },
      }, {
        label: 'Documentation',
        click() {
          shell.openExternal('https://github.com/atom/electron/tree/master/docs#readme')
        },
      }, {
        label: 'Community Discussions',
        click() {
          shell.openExternal('https://discuss.atom.io/c/electron')
        },
      }, {
        label: 'Search Issues',
        click() {
          shell.openExternal('https://github.com/atom/electron/issues')
        },
      }],
    }]
    menu = Menu.buildFromTemplate(template)
    mainWindow.setMenu(menu)
  }
}

if (process.env.NODE_ENV === 'development') {
  require('electron-debug')() // eslint-disable-line global-require
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('ready', createWindow)
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
