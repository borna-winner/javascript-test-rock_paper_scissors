let playRoundResult = "";
let score = 0;
function playRound(playerPick, computerPick) {
    if(playerPick === ("rock") && computerPick === ("rock")){
        playRoundResult = ("You draw! rock rock");
        score += 0;
    }
    else if(playerPick === ("rock") && computerPick === ("scissors")){
        playRoundResult = ("You win! rock beats scissors");
        score += 1;
    }
    else if(playerPick === ("rock") && computerPick === ("paper")){
        playRoundResult = "You lose rock he got paper";
        score += -1;
    }
    else if(playerPick === ("scissors") && computerPick === ("paper")){
        playRoundResult = "You won! scissors he got paper";
        score += 1;
    }
    else if(playerPick === ("scissors") && computerPick === ("scissors")){
        playRoundResult = "You draw scissors scissors scissors";
        score += 0;
    }
    else if(playerPick === ("scissors") && computerPick === ("rock")){
        playRoundResult = "You lose scicssors! he got rock";
        score += -1;
    }
    else if(playerPick === ("paper") && computerPick === ("rock")){
        playRoundResult = "You win!!! paper beats rock";
        score += 1;
    }
    else if(playerPick === ("paper") && computerPick === ("paper")){
        playRoundResult = "You draw! paper he got paper";
        score += 0;
    }
    else if(playerPick === ("paper") && computerPick === ("scissors")){
        playRoundResult = "you lose paper he got scissors";
        score += -1;
    }
}
const choiceArray = ["rock", "paper", "scissors"];
let playerPick = (prompt("please enter rock paper or scissors"));

function computerPlay(){
    return computerPick = choiceArray[~~(Math.random() * choiceArray.length)];
}

function playerPlay() { 
    return playerPick = playerPick.toLowerCase();
}

function scoreGame() {
    if(score >= 1) { 
        return(scoreResult="YOU WON");
    }
    else if(score <= -1) {
        return(scoreResult = "YOU LOST !!");
    }
    else if(score == 0){
        return(scoreResult = "OKK YOU draw");
    }
    else{
        return(scoreResult = "Not Int");
    }
}
function scoreName() {
    console.log("Your score is"+" " + score);
}
function game() {
    for (let i = 0; i < 4; i++) {
        playerPick = (prompt("please enter rock paper or scissors"));
        playerPlay();
        computerPlay();   
        (playRound(playerPick, computerPick)); 
        console.log(playRoundResult);
        scoreName();
        }
        console.log(scoreGame());
        console.log("IT WORKED");
}
