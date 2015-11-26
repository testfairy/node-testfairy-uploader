#! /usr/bin/env node

var exec = require('child_process').execFile;
var path = require('path')

var arguments = process.argv.slice(2);
var script = (process.platform == 'win32') ? './testfairy-uploader.bat' : './testfairy-uploader'
var scriptPath = path.join(__dirname, script);

exec(scriptPath, arguments, function(err, stdout, stderr) {
  if (stdout) console.log(stdout);
  if (err) console.log(err);
  if (stderr) console.log(stderr);
});
