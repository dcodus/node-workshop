


var prompt = require("prompt");

var words = ['armageddon', 'space-cow', 'terminator', 'crazy'];

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
        splitWord.forEach(function(letter) {
            if(result.guess === letter){
                var duplicates = findIndex(splitWord,result.guess);
                console.log(duplicates);
                if(duplicates.length < 2){
                    guessedLettersRight.splice(splitWord.indexOf(letter),1, splitWord[splitWord.indexOf(letter)]);
                } else if(duplicates.length > 1) {
                    for(var y = 0; y <= duplicates.length; y++){
                        guessedLettersRight.splice(duplicates[y],1, splitWord[splitWord.indexOf(letter)]);
                    }
                }
            }
        })
        console.log(guessedLettersRight);
        guessRight();
    })
}

function guessWrong(){
    
}

guessRight();


/*
splitWord.forEach(function(letter) {
            if(result.guess === letter){
                //splitWord[splitWord.indexOf(letter)]
                //guessedLettersRight.splice(splitWord.indexOf(letter),1, splitWord[splitWord.indexOf(letter)]);
                
                
                //console.log(guessedLettersRight);
            }
        })
*/

