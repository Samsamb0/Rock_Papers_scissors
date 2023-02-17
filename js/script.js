let player = "";
let computer = "";
let playerScore = 0;
let computerScore = 0;
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

function playRound() {
  /*initialisation of variables*/
  let scoreSentence = document.getElementById("scoreResult");
  let pScore = document.getElementById("pResult");
  let cScore = document.getElementById("cResult");
  /*Event*/
  if (
    (player == "rock" && computer == "scissors") ||
    (player == "paper" && computer == "rock") ||
    (player == "scissors" && computer == "paper")
  ) {
    playerScore += 1;
    scoreSentence.innerText = player + " beats " + computer + " , (You Won!)";
    pScore.innerText = "Player : " + playerScore;
    cScore.innerText = "Computer : " + computerScore;
  } else if (player == computer) {
    scoreSentence.innerText =
      player + "  against " + computer + " , (It's a tie!)";
    pScore.innerText = "Player : " + playerScore;
    cScore.innerText = "Computer : " + computerScore;
  } else {
    computerScore += 1;
    scoreSentence.innerText = computer + " beats " + player + " , (You lose!)";
    pScore.innerText = "Player : " + playerScore;
    cScore.innerText = "Computer : " + computerScore;
  }
}
