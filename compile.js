#!/usr/bin/env node

var fs = require('fs');
var compressor = require('node-minify');
var cheerio = require('cheerio');

var tmpl = fs.readFileSync('template.html');
tmpl = tmpl.toString();

var injectStream = fs.createReadStream('inject.js');
injectStream.pipe(fs.createWriteStream('inject.compiled.js'));
injectStream.on("end", function() {
    // Read and grab the templates parts
    $ = cheerio.load(tmpl);
    var head = $('head').html().trim().replace(/\n/g, '\\\n').replace(/"/g, '\\"');
    var body = $('body').html().trim().replace(/\n/g, '\\\n').replace(/"/g, '\\"');
    // Inlines the template
    fs.appendFileSync('inject.compiled.js', '\n// template\n');
    fs.appendFileSync('inject.compiled.js', 'tmpl.head = \"' + head + '\";\n');
    fs.appendFileSync('inject.compiled.js', 'tmpl.body = \"' + body + '\";\n');
    // Minify
    new compressor.minify({
        type: 'uglifyjs',
        fileIn: 'inject.compiled.js',
        fileOut: 'inject.min.js',
        callback: function(err){
            if(err) console.log(err);
        }
    })
});