var buttonColours = ["green", "red", "yellow", "blue"];

var gamePattern = [];

var userClickedPattern = [];

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    console.log(userClickedPattern);

    playSound(userChosenColour);

});

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);

    console.log(randomNumber);
    
    var randomChosenColour = buttonColours[randomNumber];
    
    console.log(randomChosenColour);

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

}

function playSound(name) {

    var audio = new Audio ("sounds/" + name + ".mp3");

    audio.play();

}

function animatePress(currentColour) {
    
    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}

