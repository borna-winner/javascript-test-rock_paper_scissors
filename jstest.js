let playRoundResult = "";
let score = 0;
function playRound(playerPick, computerPlay) {
    if(playerPick === ("rock") && computerPlay() === ("rock")){
        playRoundResult = ("You draw! rock rock");
        score += 0;
    }
    else if(playerPick === ("rock") && computerPlay() === ("scissors")){
        playRoundResult = ("You win! rock beats scissors");
        score += 1;
    }
    else if(playerPick === ("rock") && computerPlay() === ("paper")){
        playRoundResult = "You lose rock he got paper";
        score -= 1;
    }
    else if(playerPick === ("scissors") && computerPlay() === ("paper")){
        playRoundResult = "You won! scissors he got paper";
        score += 1;
    }
    else if(playerPick === ("scissors") && computerPlay() === ("scissors")){
        playRoundResult = "You draw scissors scissors scissors";
        score += 0;
    }
    else if(playerPick === ("scissors") && computerPlay() === ("rock")){
        playRoundResult = "You lose scicssors! he got rock";
        score -= 1;
    }
    else if(playerPick === ("paper") && computerPlay() === ("rock")){
        playRoundResult = "You win!!! paper beats rock";
        score += 1;
    }
    else if(playerPick === ("paper") && computerPlay() === ("paper")){
        playRoundResult = "You draw! paper he got paper";
        score += 0;
    }
    else if(playerPick === ("paper") && computerPlay() === ("scissors")){
        playRoundResult = "you lose paper he got scissors";
        score -= 1;
    }
}
const choiceArray = ["rock", "paper", "scissors"];
let playerPick = (prompt("please enter rock paper or scissors"));

function computerPlay() {
  return choiceArray[~~(Math.random() * choiceArray.length)];
}

function playerPlay() {
    return playerPick = playerPick.toLowerCase();
}

let playerInput = ("please enter rock paper or scissors");

function scoreGame() {
    if(score > 0) {
        scoreResult = "ScoreWin";
        return(scoreResult);
    }
    else if(score < 0) {
        scoreResult = "scoreLose";
        return(scoreResult);
    }
    else if(score === 0){
        scoreResult = "OKK";
    }
    else{
        return("What happened");
    }
}

function game() {
    for (let i = 0; i < 4; i++) {
        playerInput = (prompt("please enter rock paper or scissors"));
        playerPlay();   
        (playRound(playerPick, computerPlay)); 
        console.log(playRoundResult);
        if(i === 4) {break;}
        console.log(scoreGame());
}
}