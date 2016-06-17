/* eslint strict: 0, no-shadow: 0, no-unused-vars: 0, no-console: 0 */
'use strict'

require('babel-polyfill')
const os = require('os')
const webpack = require('webpack')
const electronCfg = require('./webpack.config.electron.js')
const cfg = require('./webpack.config.production.js')
const packager = require('electron-packager')
const del = require('del')
const exec = require('child_process').exec
const argv = require('minimist')(process.argv.slice(2))
const pkg = require('./package.json')
const deps = Object.keys(pkg.dependencies)
const devDeps = Object.keys(pkg.devDependencies)
const electronInstaller = require('electron-winstaller');

const appName = argv.name || argv.n || pkg.productName
const shouldUseAsar = argv.asar || argv.a || false
const shouldBuildAll = argv.all || false

console.log(electronCfg)

const DEFAULT_OPTS = {
  dir: './',
  name: appName,
  asar: shouldUseAsar,
  ignore: [
    '/test($|/)',
    '/tools($|/)',
    '/release($|/)',
    '/main.development.js',
  ].concat(devDeps.map(name => `/node_modules/${ name }($|/)`))
  .concat(
    deps.filter(name => !electronCfg.default.externals.includes(name))
      .map(name => `/node_modules/${ name }($|/)`)
  ),
}

const icon = argv.icon || argv.i || 'app/app'

if (icon) {
  DEFAULT_OPTS.icon = icon
}

const version = argv.version || argv.v

if (version) {
  DEFAULT_OPTS.version = version
  startPack()
} else {
  // use the same version as the currently-installed electron-prebuilt
  exec('npm list electron-prebuilt --dev', (err, stdout) => {
    if (err) {
      DEFAULT_OPTS.version = '0.37.6'
    } else {
      DEFAULT_OPTS.version = stdout.split('electron-prebuilt@')[1].replace(/\s/g, '')
    }

    startPack()
  })
}


function build(cfg) {
  return new Promise((resolve, reject) => {
    webpack(cfg, (err, stats) => {
      if (err) return reject(err)
      resolve(stats)
    })
  })
}

function startPack() {
  console.log('start pack...')
  build(electronCfg.default)
    .then(() => build(cfg.default))
    .then(() => del('release'))
    .then(paths => {
      if (shouldBuildAll) {
        // build for all platforms
        const archs = ['ia32', 'x64']
        const platforms = ['linux', 'win32', 'darwin']

        platforms.forEach(plat => {
          archs.forEach(arch => {
            pack(plat, arch, log(plat, arch))
          })
        })
      } else {
        // build for current platform only
        pack(os.platform(), os.arch(), log(os.platform(), os.arch()))
      }
    })
    .catch(err => {
      console.error(err)
    })
}

function pack(plat, arch, cb) {
  // there is no darwin ia32 electron
  if (plat === 'darwin' && arch === 'ia32') return

  const iconObj = {
    icon: DEFAULT_OPTS.icon + (() => {
      let extension = '.png'
      if (plat === 'darwin') {
        extension = '.icns'
      } else if (plat === 'win32') {
        extension = '.ico'
      }
      return extension
    })(),
  }

  const opts = Object.assign({}, DEFAULT_OPTS, iconObj, {
    'platform': plat,
    arch,
    'prune': true,
    'app-version': pkg.version || DEFAULT_OPTS.version,
    'out': `release/${ plat }-${ arch }`,
  })

  if (`${ plat }-${ arch }` === 'darwin-x64') {
    opts['osx-sign'] = {
      app: '/release/darwin-x64/Felony-darwin-x64/Felony.app',
      identity: 'xxxxxxxxx', // Developer ID Application: * (*)
    }
  }

  console.log('opts', opts)

  packager(opts, cb)
}

function log(plat, arch) {
  return (err, filepath) => {
    if (err) return console.error(err)
    console.log(`${ plat }-${ arch } finished`)
    if (`${ plat }-${ arch }` === 'win32-x64') {
      var resultPromise = electronInstaller.createWindowsInstaller({
        appDirectory: 'release/win32-x64/Felony-win32-x64',
        outputDirectory: 'release/win32-x64-installer',
        authors: 'Henry Boldizsar',
        exe: 'Felony.exe',
      });
      resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
    }
  }
}
