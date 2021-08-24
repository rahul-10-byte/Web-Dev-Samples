var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png

var randomImageSource = "images/" + randomDiceImage; //images/dic1.png

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSource );

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiscImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiscImage2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").textContent = "Player 1 Won!!!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Won!!!";
} else {
    document.querySelector("h1").textContent = "Draw Match!!!";
}