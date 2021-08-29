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

//before will add the element before the opening tag of next element
$("h1").before("<button>Say</button>");

//after will add the element after the closing tag of pervious element
$("h1").after("<button>Say</button>");

//prepend will add the element after the opening tag of the element
$("h1").prepend("<button>Say</button>");

//append will add the element before the closing tag of the element
$("h1").append("<button>Say</button>");