//Caching the DOM: Storing parts of the HTML as variables for ease of future reference
const userScore = 0;
const computerScore = 0;

//Use .getElementById("id") to get a specific element given an ID in HTML
//Use .querySelector() for anything not given by a specific ID --> returns the first instance
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
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
      console.log("user wins");
      break;
    case "sr":
    case "rp":
    case "ps":
      console.log("computer wins");
      break;
    case "rr":
    case "pp":
    case "ss":
      console.log("it's a draw");
      break;
  }
}

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}
