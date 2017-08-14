// the placement of the ship
var location1 = 3;
var location2 = 4;
var location3 = 5;

// stores the current guess from the user input
var guess;

// keeps track of how many hits have been successfully made
var hits = 0;

// keeps track of how many guesses have been made
var guesses = 0;

// whether the ship has been sunk yet
var isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (Enter a number from 0-6):");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number");
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits = hits + 1;
      alert("HIT!");

      if (hits == 3) {
        isSunk = true;
        alert("You sunk my battleship!");
      }
    }
  }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " +
              "which means your shooting accuracy was " + (3/guesses);
alert(stats);
