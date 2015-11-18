
/*
 ___________.._______
| .__________))______|
| | / /      ||
| |/ /       ||
| | /        ||.-''.
| |/         |/  _  \
| |          ||  `/,|
| |          (\\`_.'
| |         .-`--'.
| |        /Y . . Y\
| |       // |   | \\
| |      //  | . |  \\
| |     ')   |   |   (`
| |          ||'||
| |          || ||
| |          || ||
| |          || ||
| |         / | | \
""""""""""|_`-' `-' |"""|
|"|"""""""\ \       '"|"|
| |        \ \        | |
: :         \ \       : : 
. .          `'       . .

*/


var hangHead = " ___________.._______\n| .__________))______|\n| | / /      ||\n| |/ /       ||\n| | /        ||.-''.\n| |/         |/  _  \\\n| |          ||  `/,|\n| |          (\\\\`_.'";
var hangNeck = "| |         .-`--'.\n| |        /Y . . Y\\\n| |       // |   | \\\\";
var hangBody = "| |      //  | . |  \\\n| |     ')   |   |   (`\n| |          ||'||\n| |          || ||";
var hangFeet = '| |          || ||\n| |          || ||\n| |         / | | \\\n""""""""""|_`-" `-" |"""|';
var hangAll = '|"|"""""""\\ \\       \'"|"|\n| |        \\ \\        | |\n: :         \\ \\       : : \n. .          `\'       . .';



//'space-cow', 'terminator', 'crazy'

var prompt = require("prompt");

var words = ['armageddon'];

var randomWord = words[Math.floor(Math.random() * words.length)];

var hangProgress = -1;

var splitWord = randomWord.split('');

var guessedLettersRight = [];
var guessedLettersWrong = [];

splitWord.forEach(function(letter){
    letter = "_";
    guessedLettersRight.push(letter);
})



//Push the guessed right letters into an array and make sure to copy the position of the guessed letter
//to the new arry.

////////////////////////////Helper functions////////////////////////////////////

function findIndex(arr, val){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val){
            newArr.push(i);
        }
    }
    return newArr;
}



////////////////////////////////////////////////////////////////////////////////

function guessRight(){
    prompt.get('guess', function(error, result){
        //We are going over every letter and checking it against the input
        var found;
        splitWord.forEach(function(letter) {
            //If we find a match
            if(result.guess === letter){
                found = true;
                //We check to see if there are duplicate letters in the word
                //If there are duplicates we store the possitions of those duplicates in the duplicates array
                var duplicates = findIndex(splitWord,result.guess);
                console.log(duplicates);
                //If there are no duplicates we run the first scenario
                if(duplicates.length < 2){
                    guessedLettersRight.splice(splitWord.indexOf(letter),1, splitWord[splitWord.indexOf(letter)]);
                    //If there are dupliactes we run the second one
                } else if(duplicates.length > 1) {
                    //We run a for loop to go over all the positions of duplicates
                    for(var y = 0; y < duplicates.length; y++){
                        //THIS IS IMPORTANT! Here we take our duplicate letter, and add it to every index position
                        //in guessedLettersRight that matches the index positions of duplicates.
                                            //THIS SHOW THE POSITION  //THIS IS WHERE WE ADD THE SAME LETTER
                        guessedLettersRight.splice(duplicates[y],1, splitWord[splitWord.indexOf(letter)]);
                    }
                }
            }
            
        })
            if(found && hangProgress < 4){
            //We output to the console the progress
            console.log(guessedLettersRight);
            guessRight();
            } else if (!found && hangProgress < 3){
                console.log(hangHead);
                console.log(hangNeck);
                console.log(hangBody);
                console.log(hangFeet);
                console.log(hangAll);
                hangProgress++;
                console.log("You is goona die!");
                guessRight();
            } else {
                console.log("You dead!");
                return;
            }
    })
}


guessRight();



