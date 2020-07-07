function computerPlay() {
  let num = Math.floor(Math.random() * 3) + 1;
  // randomly generates a number between 1 and 3
  switch(num) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

function playRound(playerSelection, computerSelection) {
  let ps = playerSelection.toLowerCase();
  if (ps == computerSelection) {
    return `It's a Draw! You both selected ${titleCase(computerSelection)}`
  }
  else if (
    (ps == "rock" && computerSelection == "scissors") ||
    (ps == "paper" && computerSelection == "rock") ||
    (ps == "scissors" && computerSelection == "paper")
  ) {
    return `You Win! ${titleCase(ps)} beats ${titleCase(computerSelection)}`
  }
  else {
    return `You Lose! ${titleCase(computerSelection)} beats ${titleCase(ps)}`
  }
}


function game() {
  let win = 0;
  let lose = 0;
  let draw = 0;
    for (let i=0; i<5; i++) {
      let playerSelection = prompt("Choose rock, paper or scissors: ");
      let computerSelection = computerPlay();
      var result = playRound(playerSelection, computerSelection);
      console.log(result)
        if (result.includes("Win")) {
          win++
        }
        else if (result.includes("Lose")) {
          lose++
        }
        else {
          draw++
        }
    }
  console.log(`Wins:${win}   Losses:${lose}   Draws:${draw}`)
    if (win > lose) {
      console.log("Final Result: You are the Winner!!")
    }
    else if (lose > win) {
      console.log("Final Result: You have lost!!")
    }
    else {
      console.log("Final Result: It is a Draw!!")
    }

}
