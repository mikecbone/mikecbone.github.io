//Update selected menu on page load
updateMenuHighlight($(document).scrollTop());

//On click, scroll functions
$("#title").on("click", function() {
	$('html,body').clearQueue()
	$('html,body').animate({ scrollTop: 0 }, 2000);
	return false;
})

$("#about").on("click", function() {
	$('html,body').clearQueue()
	$('html,body').animate({ scrollTop: $(".aboutcontainer").offset().top - 75 }, {duration: 2000, easing: 'easeInOutQuint'});
	return false;
})

$("#work").on("click", function() {
	$('html,body').clearQueue()
	$('html,body').animate({ scrollTop: $(".workcontainer").offset().top - 75 }, {duration: 2000, easing: 'easeInOutQuart'});
	return false;
})

$("#cv").on("click", function() {
	$('html,body').clearQueue()
	$('html,body').animate({ scrollTop: $(".cvcontainer").offset().top - 75 }, {duration: 2000, easing: 'easeInOutQuart'});
	return false;
})

$("#contact").on("click", function() {
	$('html,body').clearQueue()
	$('html,body').animate({ scrollTop: $(".contactcontainer").offset().top - 75 }, {duration: 2000, easing: 'easeInOutQuart'});
	return false;
})

$("#contactForm").on("click", function() {
	$('#myForm').trigger("reset");
})

//Updating selected menu item
$(document).on('scroll', function() {
	var currScrollPos = $(document).scrollTop();
	//Call updating selected menu item function on scroll
	updateMenuHighlight(currScrollPos);
});

function updateItemCSS(item, cssData, newValue) {
    item.css(cssData, newValue);
}

function updateMenuHighlight(currentScrollPos) {
    var $updateType = 'color';
    var $initialValue = 'rgba(0, 0, 0, 0.5)';
    var $newValue = 'rgba(0, 0, 0, 1)';

    updateItemCSS($('#about a'), $updateType, $initialValue);
    updateItemCSS($('#work a'), $updateType, $initialValue);
    updateItemCSS($('#cv a'), $updateType, $initialValue);
    updateItemCSS($('#contact a'), $updateType, $initialValue);

    if($(window).scrollTop() + $(window).height() == $(document).height()) {
           $('#contact a').css($updateType, $newValue);
       }
    else if (currentScrollPos <= $('.aboutcontainer').offset().top + $('.aboutcontainer').outerHeight(true) - 150) {
        $('#about a').css($updateType, $newValue);
    } 
    else if (currentScrollPos <= $('.workcontainer').offset().top + $('.workcontainer').outerHeight(true) - 150) {
        $('#work a').css($updateType, $newValue);
    } 
    else if (currentScrollPos <= $('.cvcontainer').offset().top + $('.cvcontainer').outerHeight(true) - 150) {
        $('#cv a').css($updateType, $newValue);
    } 
}