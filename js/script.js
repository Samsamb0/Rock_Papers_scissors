/*variables globales*/
let player;
let computer;
function onload() {
  /*Initialisation de variables*/
  let rock = document.getElementById("rock");
  let paper = document.getElementById("paper");
  let scissors = document.getElementById("scissors");
  /*EVENT*/
  rock.addEventListener("click", function () {
    player = "rock";
  });
  scissors.addEventListener("click", function () {
    player = "scissors";
  });
  paper.addEventListener("click", function () {
    player = "paper";
  });
}

function computerPlay() {
  let random = parseFloat((Math.random() * 100).toFixed(2));
  if (random < 33.33) {
    computer = "rock";
  } else if (random >= 33.33 && random < 66.67) {
    computer = "paper";
  } else if (random >= 66.67) {
    computer = "scissors";
  } else {
    console.log("BIG PROBLEM");
  }
}
