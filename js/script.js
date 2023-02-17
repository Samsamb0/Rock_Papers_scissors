let player = "";
let computer = "";
let playerScore = 0;
let computerScore = 0;
let scoreSentence = document.getElementById("scoreResult");
let pScore = document.getElementById("pResult");
let cScore = document.getElementById("cResult");

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
  rock.addEventListener("click", playRock);
  paper.addEventListener("click", function () {
    player = "paper";
    playerEmote.innerHTML = "<img src='images/feuille.png'></img>";
  });
  paper.addEventListener("click", playPaper);
  scissors.addEventListener("click", function () {
    player = "scissors";
    playerEmote.innerHTML = "<img src='images/ciseaux.png'></img>";
  });
  scissors.addEventListener("click", playScissors);
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

function playRock() {
  if (computer == "rock") {
    scoreSentence.innerText = "its a tie";
    pScore.innerText = "Player : " + playerScore;
    cScore.innerText = "Computer : " + computerScore;
  } else if (computer == "paper") {
    computerScore += 1;
    scoreSentence.innerText = "you loss rock against paper";
    pScore.innerText = "Player : " + playerScore;
    cScore.innerText = "Computer : " + computerScore;
  } else if (computer == "scissors") {
    playerScore += 1;
    scoreSentence.innerText = "you winn rock against scissors";
    pScore.innerText = "Player : " + playerScore;
    cScore.innerText = "Computer : " + computerScore;
  }
}

function playPaper() {
  if (computer == "paper") {
    scoreSentence.innerText = "its a tie";
    pScore.innerText = "Player : " + playerScore;
    cScore.innerText = "Computer : " + computerScore;
  } else if (computer == "scissors") {
    computerScore += 1;
    scoreSentence.innerText = "you loss paper against scissors";
    pScore.innerText = "Player : " + playerScore;
    cScore.innerText = "Computer : " + computerScore;
  } else if (computer == "rock") {
    playerScore += 1;
    scoreSentence.innerText = "you win paper against rock";
    pScore.innerText = "Player : " + playerScore;
    cScore.innerText = "Computer : " + computerScore;
  }
}

function playScissors() {
  if (computer == "scissors") {
    scoreSentence.innerText = "its a tie";
    pScore.innerText = "Player : " + playerScore;
    cScore.innerText = "Computer : " + computerScore;
  } else if (computer == "rock") {
    computerScore += 1;
    scoreSentence.innerText = "you loss scissors against rock";
    pScore.innerText = "Player : " + playerScore;
    cScore.innerText = "Computer : " + computerScore;
  } else if (computer == "paper") {
    playerScore += 1;
    scoreSentence.innerText = "you win scissors against paper";
    pScore.innerText = "Player : " + playerScore;
    cScore.innerText = "Computer : " + computerScore;
  }
}
