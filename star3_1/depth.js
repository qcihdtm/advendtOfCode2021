var bit0 = 0;
var bit1 = 0;
var bit2 = 0;
var bit3 = 0;
var bit4 = 0;
var bit5 = 0;
var bit6 = 0;
var bit7 = 0;
var bit8 = 0;
var bit9 = 0;
var bit10 = 0;
var bit11 = 0;
var lineCounter = 0;
var gamma = 0;
var epsilon = 0;


var data = require('fs').readFileSync('input.txt', 'utf-8').split('\n')

for (var i = 0; i < data.length; i++) {
    bit0 += parseInt(data[i][0])
    bit1 += parseInt(data[i][1])
    bit2 += parseInt(data[i][2])
    bit3 += parseInt(data[i][3])
    bit4 += parseInt(data[i][4])
    bit5 += parseInt(data[i][5])
    bit6 += parseInt(data[i][6])
    bit7 += parseInt(data[i][7])
    bit8 += parseInt(data[i][8])
    bit9 += parseInt(data[i][9])
    bit10 += parseInt(data[i][10])
    bit11 += parseInt(data[i][11])
    // console.log(data[i], " ", data[i][0], " ", data[i][1], " ", data[i][2], " ", data[i][3], " ", data[i][4], " ", data[i][5], " ", data[i][11])
    lineCounter++;
}
console.log(bit0, " ", bit1, " ", bit2, " ", bit3, " ", bit4, " ", bit5, " ", bit6, " ", bit7, " ", bit8, " ", bit9, " ", bit10, " ", bit11)
if (bit0 > lineCounter/2){
    gamma += 2**11;
} else {
    epsilon += 2**11;
}
if (bit1 > lineCounter/2){
    gamma += 2**10;
} else {
    epsilon += 2**10;
}
if (bit2 > lineCounter/2){
    gamma += 2**9;
} else {
    epsilon += 2**9;
}
if (bit3 > lineCounter/2){
    gamma += 2**8;
} else {
    epsilon += 2**8;
}
if (bit4 > lineCounter/2){
    gamma += 2**7;
} else {
    epsilon += 2**7;
}
if (bit5 > lineCounter/2){
    gamma += 2**6;
} else {
    epsilon += 2**6;
}
if (bit6 > lineCounter/2){
    gamma += 2**5;
} else {
    epsilon += 2**5;
}
if (bit7 > lineCounter/2){
    gamma += 2**4;
} else {
    epsilon += 2**4;
}
if (bit8 > lineCounter/2){
    gamma += 2**3;
} else {
    epsilon += 2**3;
}
if (bit9 > lineCounter/2){
    gamma += 2**2;
} else {
    epsilon += 2**2;
}
if (bit10 > lineCounter/2){
    gamma += 2**1;
} else {
    epsilon += 2**1;
}
if (bit11 > lineCounter/2){
    gamma += 2**0;
} else {
    epsilon += 2**0;
}

console.log("lineC: ", lineCounter, "gamma: ", gamma, " eps: ", epsilon, " value: ", (gamma*epsilon))
console.log(2**11)

