let startGame = document.querySelector(".start_game");
let userSelects = document.querySelector(".user_selects");
let imageAll = document.querySelectorAll("img");
let computer = ["rock" , "paper" , "scissor"];
let  playerScore = document.getElementById("player_score");
let  computerScore = document.getElementById("computer_score");
let playerScoreCard = 0;
let computerScoreCard = 0;

startGame.addEventListener("click" , startTheGame);

function startTheGame(){
    startGame.classList.add("d-none");
    userSelects.classList.remove("d-none");
    imageAll.forEach(function(imageList){
        imageList.addEventListener("click" , function(){
            chooseOneByComputer(imageList); 
        })
    }) 
}

function chooseOneByComputer(imageList){
    let computerChoice = computer[Math.floor((Math.random() * 3))];
    alert(`Computer Selected ${computerChoice}`);
    resultChoose(imageList , computerChoice);
    }
    
function resultChoose(imageList , computerChoice){
    if (imageList.classList.contains("rock") && computerChoice === "paper") {
        computerScoreCard++;
        computerScore.innerHTML = computerScoreCard;
        console.log("Computer Wins");
    }
    else if (imageList.classList.contains("rock") && computerChoice === "scissor"){
        console.log("Player Wins");
        playerScoreCard++;
        playerScore.innerHTML = playerScoreCard;
    }
    else if (imageList.classList.contains("rock") && computerChoice === "rock"){
        console.log("Match Tie");
    }
    else if (imageList.classList.contains("paper") && computerChoice === "rock"){
        console.log("Player Wins");
        playerScoreCard++;
        playerScore.innerHTML = playerScoreCard;
    }
    else if (imageList.classList.contains("paper") && computerChoice === "paper") {
        console.log("Match Tie");
    }
    else if (imageList.classList.contains("paper") && computerChoice === "scissor"){
        computerScoreCard++;
        computerScore.innerHTML = computerScoreCard;
        console.log("Computer Wins");
    }
    else if (imageList.classList.contains("scissor") && computerChoice === "paper"){
        console.log("Player Wins");
        playerScoreCard++;
        playerScore.innerHTML = playerScoreCard;
    }
    else if (imageList.classList.contains("scissor") && computerChoice === "rock"){
        computerScoreCard++;
        computerScore.innerHTML = computerScoreCard;
        console.log("Computer Wins");
    }
    else if (imageList.classList.contains("scissor") && computerChoice === "scissor"){
        console.log("Match Tie");
    }
}