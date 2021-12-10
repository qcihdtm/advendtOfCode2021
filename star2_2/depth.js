const { debug } = require('console');

var depth = 0;
var distance = 0;
var aim = 0;

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
});


lineReader.on('line', function (line) {

    var currentdirection = line.split(' ')[0];
    var currentvalue = parseInt(line.split(' ')[1]);
    if (currentdirection === "up"){
        aim -= currentvalue;
    } else if (currentdirection === "down"){
        aim += currentvalue;
    } else if (currentdirection === "forward"){
        distance += currentvalue;
        depth = depth + (aim * currentvalue);
    }
    console.log(depth * distance);
});



