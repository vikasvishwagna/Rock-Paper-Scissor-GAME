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


let generateComputerChoice = ()=>{
  let arr = ["rock","paper","scissor"];
  let randomIdx = Math.floor(Math.random()*3);
  return arr[randomIdx];
}

let gameDraw = ()=>{
  msgText.textContent = "TIE UP";
}
let showWinner = (userWin)=>{
  if(userWin){
    msgText.textContent = "YOU WIN";
    yourScore++;
    yourScorePara = yourScore;
  }else{
    msgText.textContent = "YOU LOSE";
    computerScore++;
    compScorePara = computerScore;
  }
}
const playGame = (userChoice)=>{
  
  let compChoice = generateComputerChoice();

  resultCompChoice.innerHTML =`<img src="img/${compChoice}-img.jpg" alt="">`;
  resultUserChoice.innerHTML = `<img src="img/${userChoice}-img.jpg" alt="">`;

  //1.Draw condition(userChoice == compChoice).
  if(userChoice === compChoice){
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
