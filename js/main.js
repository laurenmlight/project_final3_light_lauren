
$( document ).ready(function() {

//Hamburger Menu Plugin
    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
    });
    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
    });

//Smooth Scroll Plugin
    var scroll = new SmoothScroll('a[href*="#"]');

//Tabslet Plugin
    $('.tabs').tabslet({
    mouseevent: 'click',
    attribute: 'href',
    animation: true
    });

// Backstretch Plugin
    $("#about").backstretch("img/fruitypebbles2.jpg");

});


// JavaScript to show daily specials
var d=new Date()
  var weekday=new Array("Sunday: Half off with college ID",
                        "Monday: Half off froyo from 6pm-8pm",
                        "Tuesday: Half off Coffee Drinks",
                        "Wednesday: Half off froyo from 6pm-8pm",
                        "Thursday: Half off if you wear pajamas",
                        "Friday: $1 off with teacher ID",
                        "Saturday: $1 off when you purchase 3")

document.getElementById("promotions").addEventListener("click", function(){
    document.getElementById("specials").innerHTML = "" + weekday[d.getDay()];
});
