var fs = require('fs');

var data = fs.readFileSync('wn.v.json', 'utf8');



var obj = JSON.parse(data);

console.log(obj.synsets['hammer_in.v.01']);

console.log(obj.synsets["abandon.v.01"].hyponyms);


