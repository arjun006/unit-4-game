$(document).ready(function(){
//Number to Guess
var randomNumber = Math.floor(Math.random()*120)+19;
//Random numbers for each crystal
var crystalOne= Math.floor(Math.random()*12)+1;
var crystalTwo= Math.floor(Math.random()*12)+1; 
var crystalThree= Math.floor(Math.random()*12)+1;
var crystalFour= Math.floor(Math.random()*12)+1;


//Player score, wins, losses
var playerScore = 0;
var wins=0;
var losses=0;


//show random number and score
$("#numberToGuess").append(randomNumber);
$("#playerNumber").append(playerScore);

//Function to get player clicks
$("#crystal-1").click(function(){
    playerScore=playerScore + crystalOne;
    check();

});

$("#crystal-2").click(function(){
    playerScore=playerScore + crystalTwo;
    check();

});
$("#crystal-3").click(function(){
    playerScore=playerScore + crystalThree;
    check();

});
$("#crystal-4").click(function(){
    playerScore =playerScore + crystalFour;
    check();

});

//Check to see if player wins/losses
var check = function(){
    if(playerScore==randomNumber){
        wins = wins + 1;
        alert("You Won! :)");
        updateScore();
        restart();
    }
    else if(playerScore>randomNumber){
        losses=losses+1;
        alert("You Lost! :(");
        updateScore();
        restart();
    }
    else{
        updateScore();
    }
};

//Update Score
var updateScore = function(){
    $("#wins").empty();
    $("#wins").append(wins);
    $("#losses").empty();
    $("#losses").append(losses);
    $("#playerNumber").empty();
    $("#playerNumber").append(playerScore);
};

//Restart Function
var restart=function(){
    playerScore=0;
    $("#playerNumber").empty();
    randomNumber = Math.floor(Math.random()*120)+19;
    $("#numberToGuess").text(randomNumber);
    crystalOne = Math.floor(Math.random()*12)+1;
    crystalTwo = Math.floor(Math.random()*12)+1;
    crystalThree = Math.floor(Math.random()*12)+1;
    crystalFour = Math.floor(Math.random()*12)+1;
};



});