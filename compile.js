var fs = require("fs");

var tmpl = fs.readFileSync('template.html');
tmpl = tmpl.toString();
tmpl = tmpl.replace(/\n/g, '\\\n');
tmpl = tmpl.replace(/"/g, '\\"');

fs.appendFileSync('inject.js', '\n// template\ntmpl = \"' + tmpl + '\";\n');