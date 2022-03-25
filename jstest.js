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

function scoreGame() {
    if(score >= 1) { 
        return(scoreResult="scoreWin");
    }
    else if(score <= -1) {
        return(scoreResult = "scoreLose");
    }
    else if(score == 0){
        return(scoreResult = "OKK draw");
    }
    else{
        return(scoreResult = "Not Int");
    }
}

function game() {
    for (let i = 0; i < 4; i++) {
        playerPick = (prompt("please enter rock paper or scissors"));
        playerPlay();   
        (playRound(playerPick, computerPlay)); 
        console.log(playRoundResult);
        if(i === 3) break;
            console.log(scoreGame());
            console.log(score);
        
}
}