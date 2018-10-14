var crystalColor = [0,0,0,0];

var randomNumber;
function randomNum()
{
    var min=19; 
    var max=120;  
    randomNumber = Math.floor(Math.random() * (max - min)) + min;  
}



$(document).ready(function(){
    randomNum();
    crystalNumber();
    $('.totalScore').html('Score: ' + totalScore);
    $('.randomNumber').html('Random Number: ' + randomNumber);
    $('.wins').html('Wins: ' + wins);
    $('.losses').html('Losses: ' + losses);
    $("#crystalRed").click(function () {
        totalScore = totalScore + crystalColor[crystalRed];
        evaluate();
    });
    $("#crystalBlue").click(function () {
        totalScore = totalScore + crystalColor[crystalBlue];
        evaluate();
    });
    $("#crystalGreen").click(function () {
        totalScore = totalScore + crystalColor[crystalGreen];
        evaluate();
    });
    $("#crystalYellow").click(function () {
        totalScore = totalScore + crystalColor[crystalYellow];
        evaluate();
    });
});


function crystalNumber () {
    var min=1; 
    var max=12;  
    for (var i=0; i<crystalColor.length; i++){
        crystalColor[i] = Math.floor(Math.random() * (max - min)) + min; 
    }
}

var totalScore=0;


var crystalRed=0;
var crystalBlue=1;
var crystalGreen=2;
var crystalYellow=3;


var wins=0;
var losses=0;


function reset () {
    randomNum();
    crystalNumber();
    totalScore=0;
    $('.totalScore').html('Score: ' + totalScore);
    $('.randomNumber').html('Random Number: ' + randomNumber);
}


function evaluate (){
    $('.totalScore').html('Score: ' + totalScore);
    if (totalScore === randomNumber){
        wins= wins+1;
         reset();
         $('.wins').html('Wins: ' + wins);
     }
    else if (totalScore > randomNumber){
        losses=losses+1;
        reset();
        $('.losses').html('Losses: ' + losses);
    }
}