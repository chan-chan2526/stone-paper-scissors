let computerScore = document.getElementsByClassName("computerScore")[0];
let yourScore = document.getElementsByClassName("yourScore")[0];
let Rock = document.getElementsByClassName("Rock")[0];
let Paper = document.getElementsByClassName("Paper")[0];
let Scissor = document.getElementsByClassName("Scissor")[0];
let computerPicked = document.getElementsByClassName("computerPicked")[0]; 
let yourPicked = document.getElementsByClassName("yourPicked")[0]; 
let whoWin = document.getElementsByClassName("whoWin")[0]; 
let Against = document.getElementsByClassName("Against")[0]; 
let playAgain = document.getElementsByClassName("playAgain")[0]; 
let yourAura = document.getElementsByClassName("yourAura")[0];
let pcAura = document.getElementsByClassName("pcAura")[0];
let ChooseDiv = document.getElementsByClassName("ChooseDiv")[0]; 
let ResultDiv = document.getElementsByClassName("ResultDiv")[0]; 
let nextBtn = document.getElementsByClassName("nextBtn")[0];
let rulesBtn = document.getElementsByClassName("rulesBtn")[0];
let closeRules = document.getElementsByClassName("closeRules")[0];
let rulesDiv = document.getElementsByClassName("rulesDiv")[0];
let rulesBtn1 = document.getElementsByClassName("rulesBtn1")[0];
let rulesDiv1 = document.getElementsByClassName("rulesDiv1")[0];
let closeRules1 = document.getElementsByClassName("closeRules1")[0];
let resetGame = document.getElementsByClassName("resetGame")[0];
let congratulationScreen = document.getElementsByClassName(
  "congratulationScreen"
)[0];
let closeCongratulation = document.getElementsByClassName(
  "closeCongratulation"
)[0];
let UserValue = "";
let ComputerValue = "";
let MyScore = 0;
let ComputerScore = 0;


closeCongratulation.addEventListener("click", () => {
  congratulationScreen.classList.add("hidden");
  ChooseDiv.classList.remove("hidden");
  ResultDiv.classList.add("hidden");
  whoWin.innerText = "Waiting...";
  pcAura.classList.add("hidden");
  yourAura.classList.add("hidden");
  nextBtn.classList.add("hidden");
  playAgain.classList.add("hidden");
});

rulesBtn.addEventListener("click", () => {
  rulesDiv.classList.remove("hidden");
});

closeRules.addEventListener("click", () => {
  rulesDiv.classList.add("hidden");
});

rulesBtn1.addEventListener("click", () => {
  rulesDiv1.classList.remove("hidden");
});

closeRules1.addEventListener("click", () => {
  rulesDiv1.classList.add("hidden");
});

nextBtn.addEventListener("click", () => {
  congratulationScreen.classList.remove("hidden");
});

playAgain.addEventListener("click", () => {
  ChooseDiv.classList.remove("hidden");
  ResultDiv.classList.add("hidden");
  whoWin.innerText = "Waiting...";
  pcAura.classList.add("hidden");
  yourAura.classList.add("hidden");
  nextBtn.classList.add("hidden");
  playAgain.classList.add("hidden");
});

Rock.addEventListener("click", async () => {
  UserValue = "fist";
  ResultDiv.classList.remove("hidden");
  ChooseDiv.classList.add("hidden");
  yourPicked.style.borderColor = "#0074B6";
  yourPicked.querySelector("img").setAttribute("src", "./Images/fist.png");
  playAgain.classList.add("hidden");
  Against.classList.add("hidden");
  ComputerValue = await getComputerValue();
  showResult(UserValue, ComputerValue);
});
Paper.addEventListener("click", async () => {
  UserValue = "paper";
  ResultDiv.classList.remove("hidden");
  ChooseDiv.classList.add("hidden");
  yourPicked.style.borderColor = "#FFA943";
  yourPicked.querySelector("img").setAttribute("src", "./Images/paper.png");
  playAgain.classList.add("hidden");
  Against.classList.add("hidden");
  ComputerValue = await getComputerValue();
  showResult(UserValue, ComputerValue);
});
Scissor.addEventListener("click", async () => {
  UserValue = "scissor";
  ResultDiv.classList.remove("hidden");
  ChooseDiv.classList.add("hidden");
  playAgain.classList.add("hidden");
  Against.classList.add("hidden");
  yourPicked.style.borderColor = "#BD00FF";
  yourPicked.querySelector("img").setAttribute("src", "./Images/scissor.png");
  ComputerValue = await getComputerValue();
  showResult(UserValue, ComputerValue);
});

let getComputerValue = async () => {
  return new Promise((resolve) => {
    let values = ["fist", "paper", "scissor"];
    let color = ["#0074B6", "#FFA943", "#BD00FF"];
    let computerValue;
    const interval = setInterval(() => {
      const getNumber = Math.floor(Math.random() * 3);
      computerValue = values[getNumber];
      computerPicked
        .querySelector("img")
        .setAttribute("src", `./Images/${values[getNumber]}.png`);
      computerPicked.style.borderColor = color[getNumber];
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      resolve(computerValue);
    }, 2000);
  });
};

let showResult = (UserValue, ComputerValue) => {
  let Winner = "";
  switch (UserValue) {
    case "fist":
      if (ComputerValue === "fist") {
        Winner = "tie";
      } else if (ComputerValue === "scissor") {
        Winner = "user";
      } else {
        Winner = "computer";
      }
      break;
    case "scissor":
      if (ComputerValue === "scissor") {
        Winner = "tie";
      } else if (ComputerValue === "paper") {
        Winner = "user";
      } else {
        Winner = "computer";
      }
      break;
    case "paper":
      if (ComputerValue === "paper") {
        Winner = "tie";
      } else if (ComputerValue === "fist") {
        Winner = "user";
      } else {
        Winner = "computer";
      }
      break;
  }
  if (Winner === "user") {
    playAgain.classList.remove("hidden");
    pcAura.classList.add("hidden");
    yourAura.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
    whoWin.innerText = "YOU WIN";
    Against.classList.remove("hidden");
    MyScore += 1;
    localStorage.setItem("MyScore", MyScore);
    yourScore.innerHTML = MyScore;
  } else if (Winner === "computer") {
    playAgain.classList.remove("hidden");
    yourAura.classList.add("hidden");
    pcAura.classList.remove("hidden");
    nextBtn.classList.add("hidden");
    Against.classList.remove("hidden");
    whoWin.innerText = "PC WIN";
    ComputerScore += 1;
    localStorage.setItem("ComputerScore", ComputerScore);
    computerScore.innerHTML = ComputerScore;
  } else {
    playAgain.classList.remove("hidden");
    yourAura.classList.add("hidden");
    pcAura.classList.add("hidden");
    nextBtn.classList.add("hidden");
    Against.classList.remove("hidden");
    whoWin.innerText = "TIE";
  }
};

resetGame.addEventListener("click", () => {
  ChooseDiv.classList.remove("hidden");
  ResultDiv.classList.add("hidden");
  whoWin.innerText = "Waiting...";
  pcAura.classList.add("hidden");
  yourAura.classList.add("hidden");
  nextBtn.classList.add("hidden");
  playAgain.classList.add("hidden");
  localStorage.clear();
  MyScore = 0;
  ComputerScore = 0;
  yourScore.innerHTML = MyScore;
  computerScore.innerHTML = ComputerScore;
});

const getScore = () => {
  MyScore = parseInt(localStorage.getItem("MyScore")) || 0;
  ComputerScore = parseInt(localStorage.getItem("ComputerScore")) || 0;
  yourScore.innerHTML = MyScore;
  computerScore.innerHTML = ComputerScore;
};

getScore();