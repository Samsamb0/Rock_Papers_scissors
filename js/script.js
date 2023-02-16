/*variables globales*/
let player;
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
