
var data = require('fs').readFileSync('input.txt', 'utf-8').split('\n');
let i = 0;
let ogFound = false;
let co2Found = false;


let og = data;
let co2 = data;

let mostog = [];
let leastco2 = [];

while (!(ogFound && co2Found)) {
    if (!ogFound) {
        [mostog,] = formArrays(og, i, true)
        og = mostog;
        if (mostog.length === 1) {
            ogFound = true;
            console.log("ogfound ", mostog);
        }

    }
    if (!co2Found) {
        [, leastco2] = formArrays(co2, i, false)
        co2 = leastco2;
        if (co2.length === 1) {
            co2Found = true;
            console.log("co2found ", co2);
        }
    }

    i++;
}
console.log("og: ", bin_to_dec(og), " co2: ", bin_to_dec(co2));
console.log("result: ", bin_to_dec(og) * bin_to_dec(co2))



function formArrays(newArray, pos, isItOG) {
    console.log("pos: ", pos)
    var arrayOf1 = []
    var arrayOf0 = []
    for (var i = 0; i < newArray.length; i++) {
        if (newArray[i][pos] === '1') {
            arrayOf1.push(newArray[i]);
        } else {
            arrayOf0.push(newArray[i])
        }
    }
    if (arrayOf1.length > arrayOf0.length) {
        return [arrayOf1, arrayOf0]
    } else if (arrayOf1.length < arrayOf0.length) {
        return [arrayOf0, arrayOf1]
    } else if (isItOG) {
        return [arrayOf1,]
    } else {
        return [, arrayOf0]
    }

}
function bin_to_dec(bstr) {
    return parseInt((bstr + '')
        .replace(/[^01]/gi, ''), 2);
}
