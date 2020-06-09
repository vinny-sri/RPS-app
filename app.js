//Caching the DOM: Storing parts of the HTML as variables for ease of future reference
let userScore = 0;
let computerScore = 0;

//Use .getElementById("id") to get a specific element given an ID in HTML
//Use .querySelector() for anything not given by a specific ID --> returns the first instance
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

main();

function main() {
  // Add Event Listener such that when the div is clicked, the function happens
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

function game(userChoice) {
  const compChoice = getComputerChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, compChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoice);
      break;
  }
}

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}

function win(userChoice, compChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = format(userChoice, compChoice) + ". You win!";
}

function lose(userChoice, compChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = format(userChoice, compChoice) + ". You lose!";
}

function draw(userChoice, compChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = format(userChoice, compChoice) + ". It's a draw!";
}

function convert(letter) {
  if (letter === "r") {
    return "rock";
  } else if (letter === "p") {
    return "paper";
  } else {
    return "scissors";
  }
}

function format(userChoice, compChoice) {
  return (
    "You chose " +
    convert(userChoice) +
    " and the computer chose " +
    convert(compChoice)
  );
}
