//changing color
$("h1").css("color", "purple");

//add class
$("h1").addClass("big-title margin-50");

//click event
$("h1").click(function () {
    $("h1").css("color", "purple");
});

//adding keypress
$("body").keypress(function(event) {
    $("h1").text(event.key);
});  