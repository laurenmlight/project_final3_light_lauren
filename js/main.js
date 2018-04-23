
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
