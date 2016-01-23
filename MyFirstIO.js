var fr = require('fs');
var fileBuff = fr.readFileSync(process.argv[2]);
var fileContent = fileBuff.toString();
console.log('Printing total number of lines in the file abc.');
console.log(fileContent.split('\n').length - 1);
