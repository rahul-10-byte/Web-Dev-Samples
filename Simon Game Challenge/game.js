var buttonColours = ["green", "red", "yellow", "blue"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }   
});  

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    console.log(userClickedPattern);

    playSound(userChosenColour);

    animatePress(userChosenColour);

});

function nextSequence() {
    level++;

    $("#level-title").text("Level " + level);

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
    
    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);

}

