#Template for dotCloud's Hello World boiler plate stacks

##What, Why
The way this template works is quite simple. 
Each boiler plate is striped down to the maximum, we do not wish to add any html in it. To keep them simple, and free from non useful data.  
Therefore the only thing we allow us, is to have a script tag calling a script which this repo is all about.

##How it works
* `hello.html` is a a stack boiler plate typical output.
* `template.html` contains template of the desired richer html output.
* `inject.js` the script that does the work of injecting the html.
* `compile.js` a node.js build script used to compile the template into an inline strings, and compact the all thing.

##Build
To build `inject.min.js` execute `npm install` to get the node dependencies and then `./compile.js` and voilà!