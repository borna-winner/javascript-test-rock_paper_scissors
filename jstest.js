let playroundresult = "";
let score = 0;
function playround(playerpick, computerplay) {
    if(playerpick === ("rock") && computerplay() === ("rock")){
        playroundresult = ("You draw! rock rock");
        score =+ 0;
    }
    else if(playerpick === ("rock") && computerplay() === ("scissors")){
        playroundresult = ("You win! rock beats scissors");
        score =+ 1;
    }
    else if(playerpick === ("rock") && computerplay() === ("paper")){
        playroundresult = "You lose rock he got paper";
        score =- 1;
    }
    else if(playerpick === ("scissors") && computerplay() === ("paper")){
        playroundresult = "You won! scissors he got paper";
        score =+ 1;
    }
    else if(playerpick === ("scissors") && computerplay() === ("scissors")){
        playroundresult = "You draw scissors scissors scissors";
        score =+ 0;
    }
    else if(playerpick === ("scissors") && computerplay() === ("rock")){
        playroundresult = "You lose scicssors! he got rock";
        score =- 1;
    }
    else if(playerpick === ("paper") && computerplay() === ("rock")){
        playroundresult = "You win!!! paper beats rock";
        score =+ 1;
    }
    else if(playerpick === ("paper") && computerplay() === ("paper")){
        playroundresult = "You draw! paper he got paper";
        score =+ 0;
    }
    else if(playerpick === ("paper") && computerplay() === ("scissors")){
        playroundresult = "you lose paper he got scissors";
        score =- 1;
    }
}
const myArray = ["rock", "paper", "scissors"];
let playerpick = (prompt("please enter rock paper or scissors"));

function computerplay() {
  return myArray[~~(Math.random() * myArray.length)];
}

function playerplay() {
    return playerpick = playerpick.toLowerCase();
}
let playerinput = ("please enter rock paper or scissors");

function game() {
    for (let i = 0; i < 4; i++) {
        playerinput = (prompt("please enter rock paper or scissors"));
        playerplay();
        (playround(playerpick, computerplay)); 
        console.log(playroundresult);
        //if(score > 0){
        //    console.log("You win!")
        //}
        //if(score < 0){
        //    console.log("You lose.")
        //}
}
}