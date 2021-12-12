//read file
let timers = require('fs').readFileSync('input.txt', 'utf-8').split(',');


let days = 80;
let spawns = [];

while (days > 0){

    reduce(timers)
    days--;
}

console.log(timers.length)

function reduce(data){
    for (let i = 0;i<data.length;i++ ){
        
        if (data[i]>0){
            data[i]--
        } else {
            data[i] = 6;
            spawns.push(8);
        }
    }
    data.push(...spawns)
    spawns = [];
}


