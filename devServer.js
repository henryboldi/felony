var proc = require('child_process');

// Emit File Events For JSPM to Hot Reload
require('chokidar-socket-emitter')({app: 1111});

// Start Electron
var child = proc.exec('electron .');
