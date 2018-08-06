var Client = require('ftp');
var fs = require('fs');

var c = new Client();
c.connect('FTP://ftp.tbfiles.com/AGENTES', 21, false, 'prevoir', 'tbfiles2013')
c.on('ready', function() {
  c.get('005124.tif', function(err, stream) {
    if (err) throw err;
    stream.once('close', function() { c.end(); });
    stream.pipe(fs.createWriteStream('005124.tif'));
  });
});
// connect to localhost:21 as anonymous
c.connect();