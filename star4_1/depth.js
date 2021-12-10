
var data = require('fs').readFileSync('input.txt', 'utf-8').split('\n');

let calledNumbers = data[0].split(',');

let cards = [];


for (let i = 2; i < data.length; i += 6) {
    const c = {};
    c.rows = [];
    c.rows.push(data[i].split(" "))
    c.rows.push(data[i + 1].split(" "))
    c.rows.push(data[i + 2].split(" "))
    c.rows.push(data[i + 3].split(" "))
    c.rows.push(data[i + 4].split(" "))
    c.totalValue = 0
    c.hitValues = 0;
    c.values = [[]];
    [c.totalValue, c.values] = countValues(c.rows);


    cards.push(c)
}

loop1:
for (let n = 0; n < calledNumbers.length; n++){

    for (let c = 0; c < cards.length; c++){

        for (let r = 0; r < cards[c].rows.length; r++){
            
            for (let item = 0; item < cards[c].rows[r].length; item++){

                if (cards[c].rows[r][item] === calledNumbers[n]){
                
                    
                    cards[c].hitValues += parseInt(calledNumbers[n]);
                    cards[c].values[0][r] -= calledNumbers[n];
                    cards[c].values[1][item] -= calledNumbers[n];

                    if (cards[c].values[0][r] === 0 || cards[c].values[1][item] === 0) {

                        console.log(cards[c]);
                        console.log("Bingo! ", " Marked: ", cards[c].hitValues, " Remains: " , cards[c].totalValue - cards[c].hitValues, " Last Number: ", calledNumbers[n], "Result: ", calledNumbers[n] * (cards[c].totalValue - cards[c].hitValues))
                        break loop1;
                    }

                }
            }
        }

    }

}



function countValues(data) {

    let totalValue = 0;

    let values = [];
    values.push(Array(5).fill(0));
    values.push(Array(5).fill(0));

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            totalValue += parseInt(data[i][j]);
            values[0][i] += parseInt(data[i][j]);
            values[1][j] += parseInt(data[i][j]);
        }
    }
return [totalValue, values];
}