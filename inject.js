var tmpl = {head:"<head></head>", body: "<body></body>"};
var scriptTag = document.createElement('script');
scriptTag.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js";
document.head.appendChild(scriptTag);
scriptTag.onload = function(){
    var old = $('#content').text();
    var stack = $('#content').data('stack');
    var appname = $('#content').data('appname');

    $('head').empty();
    $('body').empty();

    $('head').append(tmpl.head);
    $('body').append(tmpl.body);
    
    $('#before').text(old);
    $('.appname').text(appname);

    $.each(stacks[stack].more, function(i, e){
        var li = $('<li class="disabled"><a href="' + e.url + '" target="blank">' + e.name + '&nbsp;&rsaquo;</a></li>');
        $("#links").append(li);
    });
};


var stacks = {
    'php': {
        name: 'PHP & MySQL',
        frontEnd: 'PHP',
        gitUrl: 'git://github.com/dotcloud/stack-php-mysql.git',
        githubUrl : 'https://github.com/dotcloud/stack-php-mysql',
        dirName: 'php-on-dotcloud',
        more: [
            {
                name: "PHP on dotCloud",
                url: "http://docs.dotcloud.com/0.4/services/php/"
            },
            {
                name: "MySQL on dotCloud",
                url: "http://docs.dotcloud.com/0.4/services/mysql/"
            },
            {
                name: "PHP official documentation",
                url: "http://php.net/manual/"
            }
        ]
        },
    'node': {
        name: 'Node.js & MongoDB',
        frontEnd: 'Node.js',
        gitUrl: 'git://github.com/dotcloud/stack-node-mongo.git',
        githubUrl : 'https://github.com/dotcloud/stack-node-mongo',
        dirName: 'express-on-dotcloud',
        more: [
            {
                name: "Node.js on dotCloud",
                url: "http://docs.dotcloud.com/0.4/services/nodejs/"
            },
            {
                name: "MongoDB on dotCloud",
                url: "http://docs.dotcloud.com/0.4/services/mongodb/"
            },
            {
                name: "Node.js official documentation",
                url: "http://nodejs.org/api/all.html"
            }

        ]
        },
    'python': {
        name: 'Python & PostgreSQL',
        frontEnd: 'Python',
        gitUrl: 'git://github.com/dotcloud/stack-python-postgresql.git',
        githubUrl : 'https://github.com/dotcloud/stack-python-postgresql',
        dirName: 'php-on-dotcloud',
        more: [
            {
                name: "Python on dotCloud",
                url: "http://docs.dotcloud.com/0.4/services/python/"
            },
            {
                name: "Django on dotCloud documentation",
                url: "http://docs.dotcloud.com/0.4/tutorials/python/django/"
            },
            {
                name: "Python official documentation",
                url: "http://docs.python.org/"
            },
            {
                name: "PostgreSQL on dotCloud documentation",
                url: "http://docs.dotcloud.com/0.4/services/postgresql/"
            }
        ]
        },
    'ruby': {
        name: 'Ruby & MySQL',
        frontEnd: 'Ruby',
        gitUrl: 'git://github.com/dotcloud/stack-ruby-mysql.git',
        githubUrl : 'https://github.com/dotcloud/stack-ruby-mysql',
        dirName: 'express-on-dotcloud',
        more: [
            {
                name: "Ruby on dotCloud",
                url: "http://docs.dotcloud.com/0.4/services/ruby/"
            },
            {
                name: "MySQL on dotCloud",
                url: "http://docs.dotcloud.com/0.4/services/mysql/"
            },
            {
                name: "Sinatra official documentation",
                url: "http://www.sinatrarb.com/documentation"
            }

        ]
       },
    'perl': {
        name: 'Perl & MySQL',
        frontEnd: 'Perl',
        gitUrl: 'git://github.com/dotcloud/stack-perl-mysql.git',
        githubUrl : 'https://github.com/dotcloud/stack-perl-mysql',
        dirName: 'express-on-dotcloud',
        more: [
            {
                name: "Perl on dotCloud",
                url: "http://docs.dotcloud.com/0.4/services/perl/"
            },
            {
                name: "Mojolicious official documentation",
                url: "http://mojolicio.us/perldoc"
            }

        ]
        }
}