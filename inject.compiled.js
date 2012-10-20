var tmpl = "<html></html>";
var scriptTag = document.createElement('script');
scriptTag.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js";
document.head.appendChild(scriptTag);
scriptTag.onload = function(){
    console.log("jQuery loaded, cors: " + $.support.cors);
    var old = $('body').text();
    $('body').empty();
    $('body').append(tmpl);
    $('h1').text(old);
};

// template
tmpl = "<!DOCTYPE html>\
<html>\
<head>\
    <title>dotCloud Node.js &amp; MongoDB Hello Worlds stack</title>\
    <link rel=\"stylesheet\" type=\"text/css\" href=\"https://dashboard.dotcloud.com/css/index.css\">\
    <style type=\"text/css\">\
    </style>\
</head>\
<body>\
    <h1></h1>\
    <h3>Push Again</h3>\
</body>\
</html>";
