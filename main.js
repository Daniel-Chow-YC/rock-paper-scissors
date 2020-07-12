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

let msg = document.querySelector("#msg");
const rockBtn = document.querySelector(".btn1"); 
const paperBtn = document.querySelector(".btn2");
const scissBtn = document.querySelector(".btn3");
let endMsg = document.querySelector("#endMsg");

// Note: To pass arguments in a function that you are using in addEventListener
// use anonymous functions ie run the function within another function -- this function
// should have no arguements (for example look at function rock() below)

function rock() {
  playRound("rock", computerPlay());
}
rockBtn.addEventListener('click', rock);

paperBtn.addEventListener('click', function() {
  playRound("paper", computerPlay())
});

function sciss() {
  playRound("scissors",computerPlay());
}
scissBtn.addEventListener("click",sciss);

let winsScore = document.querySelector("#wins");
let drawsScore = document.querySelector("#draws");
let lossesScore = document.querySelector("#losses");

let win = 0;
let lose = 0;
let draw = 0;

function playRound(playerSelection, computerSelection) {
  endMsg.textContent = "";
  let ps = playerSelection.toLowerCase();
  if (ps == computerSelection) {
    msg.textContent = `It's a Draw! You both selected ${titleCase(computerSelection)}`;
    draw++;
    winsScore.textContent = `Player Score: ${win}`;
    drawsScore.textContent = `Draws: ${draw}`;
    lossesScore.textContent = `Computer Score: ${lose}`;
    
  }
  else if (
    (ps == "rock" && computerSelection == "scissors") ||
    (ps == "paper" && computerSelection == "rock") ||
    (ps == "scissors" && computerSelection == "paper")
  ) {
    msg.textContent = `You Win! ${titleCase(ps)} beats ${titleCase(computerSelection)}`
    win++
    winsScore.textContent = `Player Score: ${win}`;
    drawsScore.textContent = `Draws: ${draw}`;
    lossesScore.textContent = `Computer Score: ${lose}`;
    if (win == 5) {
      endMsg.textContent =`Congratulations! You have won the game.`
      win = 0; lose = 0; draw = 0;
    }
    // else {
    //   return;
    // }
    
  }
  else {
    msg.textContent = `You Lose! ${titleCase(computerSelection)} beats ${titleCase(ps)}`;
    lose++;
    winsScore.textContent = `Player Score: ${win}`;
    drawsScore.textContent = `Draws: ${draw}`;
    lossesScore.textContent = `Computer Score: ${lose}`;
    if (lose == 5) {
      endMsg.textContent =`Game Over! You have lost the game.`
      win = 0; lose = 0; draw = 0;
    }
    // else {
    //   return;
    // }
    
  }
}

