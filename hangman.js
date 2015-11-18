


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

function guessRight(){
    prompt.get('guess', function(error, result){
        splitWord.forEach(function(letter) {
            if(result.guess === letter){
                //splitWord[splitWord.indexOf(letter)]
                guessedLettersRight.splice(splitWord.indexOf(letter),1, splitWord[splitWord.indexOf(letter)]);
                console.log(guessedLettersRight);
            }
        })
        guessRight();
    })
}

function guessWrong(){
    
}

guessRight();