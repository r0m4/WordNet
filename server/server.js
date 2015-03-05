var http = require ('http');
var fs = require('fs');
var urlModule = require('url');
var words = fs.readFileSync('../wn.v.json', 'utf8');
var parsedWords = JSON.parse(words);

var server = http.createServer().listen(8080, function(){console.log("server listening on 8080...")});


server.on('request', function(req, res){
    
    var x = urlModule.parse(req.url, true);
    var synsetQuery = (x.path).slice(x.path.indexOf('/')+1, x.path.lastIndexOf('/'));
    console.log(synsetQuery);
    var verb = (x.path).slice(x.path.lastIndexOf('/')+1);
    console.log(verb);
    console.log(req.url);
    var z = parsedWords.synsets[verb];
    
    for (var key in z){
        console.log(key)
    }

    console.log(z);

   if(req.url===parsedWords.synsets[verb]){
         
        res.end(JSON.stringify(parsedWords.synsets[verb]));
        
   } else
   res.setHeader("Content-Type", "text/plain; charset=utf-8");
   res.end("everything end"); 
});
