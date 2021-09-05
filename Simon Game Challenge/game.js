var buttonColours = ["green", "red", "yellow", "blue"];

var gamePattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);

    console.log(randomNumber);
    
    var randomChosenColour = buttonColours[randomNumber];
    
    console.log(randomChosenColour);

    gamePattern.push(randomChosenColour);
}

