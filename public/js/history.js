$(document).ready(function() {
	initializePage();
})
var count;
var maxCount;
var minCount;
function initializePage() {
	maxCount = 5;
	minCount = 0;
	count = 0;
	$("#1star").click(changeTo1Star);
    $("#2star").click(changeTo2Star);
    $("#3star").click(changeTo3Star);
    $("#4star").click(changeTo4Star);
    $("#5star").click(changeTo5Star);
    $(".adding").click(add);
    $(".subtracting").click(minus);
    /*$('.subtracting').click(function() {
        gtag('event', 'click', {'event_category': 'rating'});
    });
    $('.adding').click(function() {
        gtag('event', 'click', {'event_category': 'rating'});
    });
    $('. btn myBtn dropdown-toggle').click(function() {
        gtag('event', 'click', {'event_category': 'rating'});
    });*/
}

function add(){
    var starItem = $(this).parents('.rating').find('h5')
    var currentStar = starItem.text();
    var starInput = $(this).parents('.rating').parents('#rateFB').find('#hiddenStars');
    if (currentStar != maxCount){
        currentStar++;
        starItem.text(currentStar);
        starInput.attr("value", currentStar);
    }
    gtag('event', 'click', {'event_category': 'rating'});	
}

function minus(){
    var starItem = $(this).parents('.rating').find('h5')
    var currentStar = starItem.text();
    var starInput = $(this).parents('.rating').parents('#rateFB').find('#hiddenStars');
	if (currentStar != minCount){
        currentStar--;
        starItem.text(currentStar);
        starInput.attr("value", currentStar);
    }
    gtag('event', 'click', {'event_category': 'rating'});	
}

function changeTo1Star(e) {
    e.preventDefault();
    $("#dropdown").text("1");
    var starInput = $(this).parents('#rateFB').find('#hiddenStars');
    starInput.attr("value", 1);
    console.log("1 star");
    gtag('event', 'click', {'event_category': 'rating'});
}

function changeTo2Star(e) {
    e.preventDefault();
    $("#dropdown").text("2");
    var starInput = $(this).parents('#rateFB').find('#hiddenStars');
    starInput.attr("value", 2);
    console.log("2 star");
    gtag('event', 'click', {'event_category': 'rating'});
}

function changeTo3Star(e) {
    e.preventDefault();
    $("#dropdown").text("3");
    var starInput = $(this).parents('#rateFB').find('#hiddenStars');
    starInput.attr("value", 3);
    console.log("3 star");
    gtag('event', 'click', {'event_category': 'rating'});
}

function changeTo4Star(e) {
    e.preventDefault();
    $("#dropdown").text("4");
    var starInput = $(this).parents('#rateFB').find('#hiddenStars');
    starInput.attr("value", 4);
    console.log("4 star");
    gtag('event', 'click', {'event_category': 'rating'});
}

function changeTo5Star(e) {
    e.preventDefault();
    $("#dropdown").text("5");
    var starInput = $(this).parents('#rateFB').find('#hiddenStars');
    starInput.attr("value", 5);
    console.log("5 star");
    gtag('event', 'click', {'event_category': 'rating'});
}