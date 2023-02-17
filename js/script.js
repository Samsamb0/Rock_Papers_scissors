let player = "";

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
