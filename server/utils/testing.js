// var fs = require('fs');
// var util = require('util');
// var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
// var log_stdout = process.stdout;

// var mongoose = require('mongoose');
// var id = mongoose.Types.ObjectId();
for (var nCnt = 1; nCnt<40; nCnt++) {
    var mongoose = require('mongoose');
    var id = mongoose.Types.ObjectId();  
    console.log(id.toString());
}




// console.log = function(d) { //
//   log_file.write(util.format(d) + '\n');
//   log_stdout.write(util.format(d) + '\n');
// };