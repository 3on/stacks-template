#!/usr/bin/env node

var fs = require("fs");
// https://github.com/srod/node-minify

var tmpl = fs.readFileSync('template.html');
tmpl = tmpl.toString();
tmpl = tmpl.replace(/\n/g, '\\\n');
tmpl = tmpl.replace(/"/g, '\\"');

var injectFile = fs.createReadStream('inject.js');
injectFile.pipe(fs.createWriteStream('inject.compiled.js'));
injectFile.on("end", function() {
    fs.appendFileSync('inject.compiled.js', '\n// template\ntmpl = \"' + tmpl + '\";\n');
});