//read file
let timers = require('fs').readFileSync('input.txt', 'utf-8').split(',');

let keepGoing = true;

let initialDays = 143;
let remainingDays = 113;
let bigtotal = 0;
let tempArray = [];

const counts = {};
let partials = {};


for (const num of timers) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}

for (let i = 1; i < 6; i++) {
    keepGoing = true;
    initialDays = 143;
    bigtotal = 0;
    
    timers = [i]
    while (initialDays > 0) {
        reduce(timers)
        initialDays--;
    }
    while (keepGoing) {
        if (timers.length > 2000) {
            tempArray = timers.slice(0, 2000);
            remainingDays = 113
            while (remainingDays > 0) {
                reduce(tempArray);
                remainingDays--;
            }
            bigtotal += tempArray.length;
            timers.splice(0, 2000)
            tempArray = [];
            console.log("timers splice: ", timers.length)
            console.log("temp: ", tempArray.length)
            console.log("partial bigtotal: ",bigtotal)
        } else {
            remainingDays = 113
            while (remainingDays > 0) {
                reduce(timers)
                remainingDays--;
            }
            bigtotal += timers.length;
            keepGoing = false;
        }

    }
    partials[i] = bigtotal;

    console.log(partials)
}

bigtotal = (partials[1] * counts[1]) + (partials[2] * counts[2]) + (partials[3] * counts[3]) + (partials[4] * counts[4]) + (partials[5] * counts[5]);// + (partials[6] * counts[6]) + (partials[7] * counts[7]) + (partials[8] * counts[8]) 

console.log(counts);

console.log("final total: ", bigtotal)

function reduce(data) {
    let counter = 0;
    for (let i = 0; i < data.length; i++) {

        if (data[i] > 0) {
            data[i]--
        } else {
            data[i] = 6;
            counter++;
        }
    }
    for (let j = 0; j < counter; j++) {
        data.push(8)
    }
}




/*

128 cycles on input gives 23909701 elements


*/
