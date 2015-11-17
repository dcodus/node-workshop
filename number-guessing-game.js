(function() {
  //We are doing a IIFE here
  var prompt = require('prompt');
  prompt.start();
  var randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log('This is the most AWESOME GAME!\nGuess anumber from 1 to 100!');

  var numberOfTries = 0;
  
  (function oneTry(){
    //Another IIFE here
    if(numberOfTries < 4){
      prompt.get('guess', function(err, result){
          if(Number(result.guess) === randomNumber){
            console.log("You guessed right!");
          } else if (Number(result.guess < randomNumber)) {
            console.log("The number is bigger");
            numberOfTries++;
            oneTry();
          } else if (Number(result.guess) > randomNumber) {
            console.log("The number is smaller");
            numberOfTries++;
            oneTry();
          }
        })
      } else if(numberOfTries === 4){
      console.log("You lose!")
    }
    //Notice how we call it right away
  })();
})()