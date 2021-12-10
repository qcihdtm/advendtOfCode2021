//read file
var data = require('fs').readFileSync('input.txt', 'utf-8').split('\n');

//calledNumbers will contain the numbers that are called in order
let calledNumbers = data[0].split(',');

//cards will be the array with each of the playing cards
let cards = [];

//counter to understand how many cards have won (row or column)
let winningCards = 0;

//read through the input to load the cards
//the input has a first line with the calling numbers, then one empty line and then 5 lines with the rows for the card
// after each card, there's a blank line
//so, we start at index 2 and jump by 6
for (let i = 2; i < data.length; i += 6) {

    //create an object
    const c = {};
    //define the property rows
    c.rows = [];
    //add row 1
    c.rows.push(data[i].split(" "))
    //add row 2
    c.rows.push(data[i + 1].split(" "))
    //add row 3
    c.rows.push(data[i + 2].split(" "))
    //add row 4
    c.rows.push(data[i + 3].split(" "))
    //add row 5
    c.rows.push(data[i + 4].split(" "))
    
    //This property will hold the sum of all values in the card
    c.totalValue = 0

    //This property increments by the number called that is present in this card
    c.hitValues = 0;

    //This property will host two arrays, one for rows [0] and one for columns [1].
    //The 5 elements on each of thesee arrays contain the sum of values for each row/column.
    //We'll use this to detect a winning card.
    c.values = [[]];

    //Call the function to load the values and totalValue properties
    [c.totalValue, c.values] = countValues(c.rows);

    //This indicates whether this card is already a winner
    c.isWinner = false;

    //Add the new card to the cards array
    cards.push(c)
}

//create a label on the nested loops so we can exit the loop when ready 
loop1:
//First loop, to go through the called numbers
for (let n = 0; n < calledNumbers.length; n++) {
    //Second loop to go through the cards array
    for (let c = 0; c < cards.length; c++) {
        //Third loop to check rows on each card
        for (let r = 0; r < cards[c].rows.length; r++) {
            //Fourth loop to look at individual values
            for (let item = 0; item < cards[c].rows[r].length; item++) {

                //is the current value equals to the gone called? (do we have a hit?)
                if (cards[c].rows[r][item] === calledNumbers[n]) {

                    //If the card is not already a winner, then mark the number in the card
                    if (!cards[c].isWinner) {
                        //Let's increment the value for the hits accummulator (we'll use it for the total)
                        cards[c].hitValues += parseInt(calledNumbers[n]);
                        //decrement the number from the total sum of each row and col
                        cards[c].values[0][r] -= calledNumbers[n];
                        cards[c].values[1][item] -= calledNumbers[n];
                    }
                    //If this row/col hit 0, it means we have bingo
                    if (cards[c].values[0][r] === 0 || cards[c].values[1][item] === 0) {

                        //we have bingo if the card was not already a winner, let's increment the winners counter
                        // and also make the card a winner for next time.
                        if (!cards[c].isWinner) {
                            winningCards++;
                            cards[c].isWinner = true;
                            console.log(c, " ", cards[c].isWinner, " Bingo! ", " Marked: ", cards[c].hitValues, " Remains: ", cards[c].totalValue - cards[c].hitValues, " Last Number: ", parseInt(calledNumbers[n]), "Result: ", parseInt(calledNumbers[n]) * (cards[c].totalValue - cards[c].hitValues))
                            // console.log(cards[c].values)
                        }

                        //if all cards have won, then this one is the last one.
                        if (winningCards === cards.length) {
                            console.log(cards[c]);
                            console.log("Last Bingo! -", " Marked: ", cards[c].hitValues, " Remains: ", cards[c].totalValue - cards[c].hitValues, " Last Number: ", parseInt(calledNumbers[n]), "Result: ", parseInt(calledNumbers[n]) * (cards[c].totalValue - cards[c].hitValues))
                            //exit the loop since we do not need to check any more cards
                            break loop1;
                        }
                    }

                }
            }
        }

    }

}


//we receive an array with all the rows in a card
function countValues(data) {

    //this is where we count the total sum of all numbers
    let totalValue = 0;

    //Create a values array to pass back.
    let values = [];
    values.push(Array(5).fill(0));
    values.push(Array(5).fill(0));

    //let's go through all items so we can sum them up
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            //sum the total value
            totalValue += parseInt(data[i][j]);
            //sum each row
            values[0][i] += parseInt(data[i][j]);
            //sum each column
            values[1][j] += parseInt(data[i][j]);
        }
    }
    return [totalValue, values];
}