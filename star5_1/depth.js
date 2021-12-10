//read file
let dataPairs = require('fs').readFileSync('input.txt', 'utf-8').split('\n');

let pointsTouched = [];
let overlappedPoints = [];

function searchForPairInList (a) {
    let x = pointsTouched.findIndex(([first, second]) =>
            (first === a[0] && second === a[1])
        );
    if (x==-1){
        pointsTouched.push(a)
    } else {
        let y = overlappedPoints.findIndex(([first, second]) =>
            (first === a[0] && second === a[1])
        );
        if(y===-1){
            overlappedPoints.push(a)
        }
    }
}

for (let i = 0; i < dataPairs.length; i++) {
    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = 0;

    let pair = dataPairs[i].split(' ');
    let single = pair[0].split(',');
    x1 = parseInt(single[0]);
    y1 = parseInt(single[1]);
    single = pair[1].split(',');
    x2 = parseInt(single[0]);
    y2 = parseInt(single[1]);

    if (x1 - x2 === 0) {
        for (let y = 0; y <= (Math.abs(y2 - y1)); y++) {
            if (y2 >= y1) {
                searchForPairInList([x1, y1 + y])
            } else {
                searchForPairInList([x1, y2 + y])

            }
        }
    }

    if (y1 - y2 === 0) {
        for (let x = 0; x <= (Math.abs(x2 - x1)); x++) {
            if (x2 >= x1) {
                searchForPairInList([x1 + x, y1])
            } else {
                searchForPairInList([x2 + x, y1])
            }
        }
    }

}
console.log(overlappedPoints.length)

