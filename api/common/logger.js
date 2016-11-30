var fs = require('fs');
var morgan = require('morgan');

var logDir = __dirname + '/../log/access.log';
fs.existsSync(logDir) || fs.mkdirSync(logDir);
var logStream = fs.createWriteStream(logDir, {flags: 'a'});
var logger = morgan('combined', {stream: logStream});

exports = logger;