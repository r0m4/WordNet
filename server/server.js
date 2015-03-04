var http = require ('http');
var fs = require('fs');
var words = fs.readFileSync('../wn.v.json', 'utf8');
var parsedWords = JSON.parse(words);

var server = http.createServer().listen(8080, function(){console.log("server listening on 8080...")});


server.on('request', function(req, res){

   if(req.url==="/abacinate.v.01"){
         
        res.end(JSON.stringify(parsedWords.synsets["abacinate.v.01"]));
        

   } else
   res.setHeader("Content-Type", "text/plain; charset=utf-8");
   res.end("everything Finish"); 
});
