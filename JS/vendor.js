let startGame = document.querySelector(".start_game");
let userSelects = document.querySelector(".user_selects");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let imageAll = document.querySelectorAll("img");
let player = [rock , paper , scissor];
let computer = ["rock" , "paper" , "scissor"];

startGame.addEventListener("click" , startTheGame);

function startTheGame(){
    startGame.classList.add("d-none");
    userSelects.classList.remove("d-none");
    chooseOneByComputer();
}

function chooseOneByComputer(){
    console.log(computer[Math.floor((Math.random() * 3))]);
    if(computer[Math.floor((Math.random() * 3))] === rock && player[1]){
        console.log("player wins");
    }
}

function userChoice(imageList){
    if (imageList.classList.contains("rock")) {
        console.log("Has rock");
    } 
}
