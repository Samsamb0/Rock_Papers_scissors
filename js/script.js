let player = "";
let computer = "";
/*variables globales*/

function load() {
  /*initialisation of variables*/
  let rock = document.getElementById("rock");
  let paper = document.getElementById("paper");
  let scissors = document.getElementById("scissors");
  let playerEmote = document.getElementById("pEmote");

  /*Event*/
  rock.addEventListener("click", function () {
    player = "rock";
    playerEmote.innerHTML = "<img src='images/pierre.png'></img>";
  });
  paper.addEventListener("click", function () {
    player = "paper";
    playerEmote.innerHTML = "<img src='images/feuille.png'></img>";
  });
  scissors.addEventListener("click", function () {
    player = "scissors";
    playerEmote.innerHTML = "<img src='images/ciseaux.png'></img>";
  });
}

function computerPlay() {
  /*initialisation of variables*/
  let result = Number((Math.random() * 100).toFixed(2));
  let computerEmote = document.getElementById("cEmote");
  /*Event*/
  if (result < 33.33) {
    computer = "rock";
    computerEmote.innerHTML = "<img src='images/pierre.png'></img>";
  } else if (result >= 33.33 && result < 66.67) {
    computer = "paper";
    computerEmote.innerHTML = "<img src='images/feuille.png'></img>";
  } else if (result > 66.67) {
    computer = "scissors";
    computerEmote.innerHTML = "<img src='images/ciseaux.png'></img>";
  }
}
