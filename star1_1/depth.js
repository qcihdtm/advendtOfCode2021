
var previous = 0;
var counter = 0;
var larger = 0;

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
  });


  lineReader.on('line', function (line) {

    if (counter === 0){
        counter++;
        previous = line;
    } else {
        if (line > previous){
            larger++;
        }
        counter++;
        previous = line;
    }
    console.log(larger);
  });

