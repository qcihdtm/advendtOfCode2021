//read file
let hpos = require('fs').readFileSync('input.txt', 'utf-8').split(',');

let fuel = 0;
let sum = 0;

let avg = 0;
const counts = {}
for (const num of hpos) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}

for (let i = 0; i<hpos.length;i++){

    sum += parseInt(hpos[i])

}

avg = sum/hpos.length;

for (let i = 0; i<hpos.length;i++){

    fuel += Math.abs(parseInt(hpos[i]) - 480)

}
console.log(counts)
// console.log(sum)
// console.log(avg)
// console.log(fuel)