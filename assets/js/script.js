//Setting variables 
var won = 0; 
var lost = 0;
var attempts = 10;
var usedArray = [];
var ranLetter = ranLetter;
var letters = "abcdefghijklmnopqrstuvwxyz"

//GENERATE THE COMPUTERS RANDOM LETTER
ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter);

function jsGuess() {
      ranLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(ranLetter);

}

//CAPTURE PLAYERS INPUT
document.onkeyup = function (event) {
      var playerGuess = event.key;

      if (usedArray.indexOf(playerGuess) < 0) {
            
            usedArray.push(playerGuess);
            console.log(usedArray);

      }

      // if player guess = ranletter, increment wins by 1, and clear used letters array 
      if (playerGuess === ranLetter) {
            alert("yay you win!");
            won++;
            attempts = 10;
            usedArray = [];

            jsGuess();
      }

      //if players guess does not equal ranLetter, decrease attempts by 1
      if (playerGuess !== ranLetter) {
            attempts--;

      }

      //when attempts left is 0, lost +1; attempts is reset to 10, and used letters array is cleared
      if (attempts == 0) {
            alert('Sorry you lost. Press "ok" to play again');
            lost++;
            usedArray = []
            attempts = 10;

            jsGuess();
      }

      //OUTPUT TO HTML

      document.getElementById('playerGuess').innerHTML = usedArray;
      document.getElementById('won').innerHTML = won;
      document.getElementById('lost').innerHTML = lost;
      document.getElementById('attempts').innerHTML = attempts;

}