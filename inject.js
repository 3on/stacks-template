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
