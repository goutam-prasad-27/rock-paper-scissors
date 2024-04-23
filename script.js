let userScore = document.querySelector(".userScore");
let botScore = document.querySelector(".botScore");
let choices = document.querySelectorAll(".choice");
let message = document.querySelector(".msg");

let userPoint = 0;
let botPoint = 0;

const showWinner = (userWin, userChoice, botChoice) => {
  if (userWin) {
    userPoint++;
    userScore.innerText = userPoint;
    message.innerHTML = `Your Choice : ${userChoice} || Bots Choice: ${botChoice} :: <b>You Won!</b>`;
  } else {
    botPoint++;
    botScore.innerText = botPoint;
    message.innerHTML = `Your Choice : ${userChoice} || Bots Choice: ${botChoice} :: <b>Bot Won!</b>`;
  }
};

const drawGame = () => {
  message.innerHTML = "<b>DRAW GAME.</b>";
};

const botOutput = () => {
  let randOutput = ["Rock", "Paper", "Scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  return randOutput[randIdx];
};

const gameStart = (userChoice) => {
  let botChoice = botOutput();

  if (userChoice === botChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "Rock") {
      userWin = botChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userWin = botChoice === "Scissors" ? false : true;
    } else {
      userWin = botChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, botChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userOption = choice.getAttribute("id");
    gameStart(userOption);
  });
});
