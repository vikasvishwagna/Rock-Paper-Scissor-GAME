let computerScore = 0;
let yourScore = 0;

let choices = document.querySelectorAll('.btn-choice');
let msgText = document.querySelector('.msg-text'); 
let compScorePara = document.querySelector('.comp-score');
let yourScorePara = document.querySelector('.your-score');
let choiceContainer = document.querySelector('.choice');
let resultContainer = document.querySelector('.result-container');
let resultUserChoice = document.querySelector('.user-choice');
let resultCompChoice =  document.querySelector('.comp-choice');
let playAgainBtn = document.querySelector('.play-again-btn');
let resetBtn = document.querySelector('.reset-btn');

let generateComputerChoice = ()=>{
  let arr = ["rock","paper","scissor"];
  let randomIdx = Math.floor(Math.random()*3);
  // console.log(`compChoice:${arr[randomIdx]}`);
  return arr[randomIdx];
}

const gameDraw = ()=>{
  msgText.textContent = "TIE UP";
}
let showWinner = (userWin)=>{
  if(userWin){
    msgText.textContent = "YOU WIN";
    yourScore++;
    yourScorePara.textContent = yourScore;
  }else{
    msgText.textContent = "YOU LOSE";
    computerScore++;
    compScorePara.textContent = computerScore;
  }
}
const playGame = (userChoice)=>{
  
  let compChoice = generateComputerChoice();

  resultCompChoice.innerHTML =`<img src="img/${compChoice}-img.jpg" alt="">`;
  resultUserChoice.innerHTML = `<img src="img/${userChoice}-img.jpg" alt="">`;

  //1.Draw condition(userChoice == compChoice).
  if(userChoice === compChoice){
    console.log("its a tie");
    resultContainer.style.display = "flex";
    choiceContainer.style.display = "none";
    gameDraw();
  
  }else{
    let userWin = true;
    if(userChoice === "rock"){
      //compChoice: paper||scissor.
      userWin = compChoice==="paper" ? false:true;
    }else if(userChoice==="paper"){
      userWin = compChoice==="scissor" ? false:true;
    }else{
      userWin = compChoice==="rock" ? false:true;  
    }
    resultContainer.style.display = "flex";
    choiceContainer.style.display = "none";
    showWinner(userWin);
  }

}


choices.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    let userChoice = btn.getAttribute("id");
    //console.log(`you have selected ${userChoice}`);
    playGame(userChoice);
  });
});

function playAgain(){
  resultContainer.style.display = "none";
  choiceContainer.style.display = "flex";
  resultCompChoice.innerHTML ="";
  resultUserChoice.innerHTML ="";
  msgText.textContent = "";
}

function resetFunction(){
 playAgain();
 yourScore = 0;
 computerScore = 0;
 yourScorePara.textContent = yourScore;
 compScorePara.textContent = computerScore;
}

playAgainBtn.addEventListener('click',playAgain);
resetBtn.addEventListener('click',resetFunction);