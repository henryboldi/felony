var links = {
    'Win': 'https://github.com/henryboldi/felony/releases/download/0.10.3/Felony-0.10.3-win.exe',
    'Mac': 'https://github.com/henryboldi/felony/releases/download/0.10.3/Felony-0.10.3-mac.zip',
    'X11': 'https://github.com/henryboldi/felony/releases/download/0.10.3/Felony-linux-0.10.3-x64.zip',
    'Linux': 'https://github.com/henryboldi/felony/releases/download/0.10.3/Felony-linux-0.10.3-x64.zip'
};
var anchors = document.getElementsByClassName('download');
for (var i = 0; i < anchors.length; i++) {
    for (var os in links) {
        if (links.hasOwnProperty(os)) {
            var link = links[os];
            if (navigator.appVersion.indexOf(os) > -1) {
                anchors[i].href = link;
            }
        }
    }
}