const { debug } = require('console');

var line1 = 0;
var line2 = 0;
var line3 = 0;
var larger = 0;
var lineCounter = 0;

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
});


lineReader.on('line', function (line) {


    if (lineCounter === 0) {
        line1 = parseInt(line);
        lineCounter++;
    } else if (lineCounter === 1) {
        line2 = parseInt(line);
        lineCounter++;
    } else if (lineCounter === 2) {
        line3 = parseInt(line);
        lineCounter++;
    } else {
        lineCounter++;
        if (line1 + line2 + line3 < line2 + line3 + parseInt(line)) {

            larger++;
            console.log(larger);
        }
        line1 = line2;
        line2 = line3;
        line3 = parseInt(line);
    }

});



