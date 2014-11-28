var fs = require('fs');

var data = fs.readFileSync('wn.v.json', 'utf8');



var obj = JSON.parse(data);
var hypRemove = obj.synsets["remove.v.01"].hyponyms.join(',');

    console.log(hypRemove);
  



fs.writeFile('words.js', 'var hypRemove = '+"'"+hypRemove+"'"+';'+'\n'+'var data = '+data, function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
//console.log(obj.synsets["remove.v.01"]);

