//Update selected menu on page load
updateMenuHighlight($(document).scrollTop());

//On click, scroll functions
$("#a1title").on("click", function() {
	$('html,body').clearQueue()
	$('html,body').animate({ scrollTop: 0 }, 2000);
	return false;
})

$("#welcome").on("click", function() {
	$('html,body').clearQueue()
	$('html,body').animate({ scrollTop: $(".welcomecontainer").offset().top - 75 }, {duration: 2000, easing: 'easeInOutQuint'});
	return false;
})

$("#games").on("click", function() {
	$('html,body').clearQueue()
	$('html,body').animate({ scrollTop: $(".gamescontainer").offset().top - 75 }, {duration: 2000, easing: 'easeInOutQuart'});
	return false;
})

$("#news").on("click", function() {
	$('html,body').clearQueue()
	$('html,body').animate({ scrollTop: $(".newscontainer").offset().top - 75 }, {duration: 2000, easing: 'easeInOutQuart'});
	return false;
})

$("#team").on("click", function() {
	$('html,body').clearQueue()
	$('html,body').animate({ scrollTop: $(".teamcontainer").offset().top - 75 }, {duration: 2000, easing: 'easeInOutQuart'});
	return false;
})

$("#join").on("click", function() {
	$('html,body').clearQueue()
	$('html,body').animate({ scrollTop: $(".joincontainer").offset().top - 75 }, {duration: 2000, easing: 'easeInOutQuart'});
	return false;
})

//Slide in functions 
$(document).on('scroll', function() {
    var currScrollPos = $(document).scrollTop();

    if (currScrollPos != 0) {
	    $('.fade-slide-right').each(function() {
	        var $this = $(this), elemOffsetTop = $this.offset().top;
	        var $xPos = (currScrollPos+650-(elemOffsetTop));
	        if ($xPos > 0) {
	            $xPos = 0
	        }
	        $this.css({left:$xPos});

	        var $opacity = 1-(elemOffsetTop-(currScrollPos+650))/300
	        $this.css('opacity', $opacity);
	    });

	    $('.fade-slide-left').each(function() {
	        var $this = $(this), elemOffsetTop = $this.offset().top;
	        var $xPos = (elemOffsetTop-650-(currScrollPos));
	        if ($xPos < 0) {
	            $xPos = 0
	        }
	        $this.css({left:$xPos});

	        var $opacity = 1-(elemOffsetTop-(currScrollPos+650))/300
	        $this.css('opacity', $opacity);
	    });

	    $('.fade-slide-up').each(function() {
	        var $this = $(this)
	        var elemOffsetTop = $this.data('start_position');

	        if (elemOffsetTop == undefined) {
	            $this.data('start_position', $this.offset().top);
	            elemOffsetTop = $this.offset().top;
	        }

	        var $yPos = (elemOffsetTop-650-(currScrollPos))/2;
	        if ($yPos < 0) {
	            $yPos = 0
	        }
	        $this.css({top:$yPos});

	        var $opacity = 1-(elemOffsetTop-(currScrollPos+650))/300
	        $this.css('opacity', $opacity);
	    });

	    $('.fade-slide-left-group').each(function() {
            var $this = $(this), elemOffsetTop = $this.offset().top;
            var $xPos = (elemOffsetTop-590-(currScrollPos));
            var $targetX = $xPos;
            if ($targetX < 0) {
                $targetX = 0
            }
            $this.css({left:$targetX});

            var $opacity = 1-(elemOffsetTop-(currScrollPos+650))/300
            $this.css('opacity', $opacity);

            slideLeftRemaining($this.data('group-id'), 1, $xPos, $opacity);
        });

        $('.fade-slide-right-group').each(function() {
            var $this = $(this), elemOffsetTop = $this.offset().top;
            var $xPos = (currScrollPos+590-(elemOffsetTop));
            var $targetX = $xPos;
            if ($targetX > 0) {
                $targetX = 0
            }
            $this.css({left:$targetX});

            var $opacity = 1-(elemOffsetTop-(currScrollPos+650))/300
            $this.css('opacity', $opacity);

            slideRightRemaining($this.data('group-id'), 1, $xPos, $opacity);
        });
	}

	//Call updating selected menu item function on scroll
	updateMenuHighlight(currScrollPos);
});

//Group slide for banners
function slideRightRemaining(groupName, ID, xPosition, opacity) {
    if ($('#' + groupName + ID).length) {
        var $this = $('#' + groupName + ID);
        var $xPos = xPosition;
        if ($xPos > 0) {
            $xPos = 0;
        }
        $this.css({left:$xPos});

        $this.css('opacity', opacity);
        slideRightRemaining(groupName, ID+1, xPosition, opacity);
    }
}

function slideLeftRemaining(groupName, ID, xPosition, opacity) {
    if ($('#' + groupName + ID).length) {
        var $this = $('#' + groupName + ID);
        var $xPos = xPosition;
        if ($xPos < 0) {
            $xPos = 0;
        }
        $this.css({left:$xPos});

        $this.css('opacity', opacity);
        slideLeftRemaining(groupName, ID+1, xPosition, opacity);
    }
}

//Updating selected menu item
function updateItemCSS(item, cssData, newValue) {
    item.css(cssData, newValue);
}

function updateMenuHighlight(currentScrollPos) {
    var $updateType = 'color';
    var $initialValue = 'rgba(255, 255, 255, 0.5)';
    var $newValue = 'rgba(255, 255, 255, 1.0)';

    updateItemCSS($('#welcome a'), $updateType, $initialValue);
    updateItemCSS($('#games a'), $updateType, $initialValue);
    updateItemCSS($('#news a'), $updateType, $initialValue);
    updateItemCSS($('#team a'), $updateType, $initialValue);
    updateItemCSS($('#join a'), $updateType, $initialValue);
    updateItemCSS($('#separator a'), $updateType, $initialValue);

    if (currentScrollPos <= $('.welcomecontainer').offset().top + $('.welcomecontainer').outerHeight(true)) {
        $('#welcome a').css($updateType, $newValue);
    } else if (currentScrollPos <= $('.gamescontainer').offset().top + $('.gamescontainer').outerHeight(true)) {
        $('#games a').css($updateType, $newValue);
    } else if (currentScrollPos <= $('.newscontainer').offset().top + $('.newscontainer').outerHeight(true)) {
        $('#news a').css($updateType, $newValue);
    } else if (currentScrollPos <= $('.teamcontainer').offset().top + $('.teamcontainer').outerHeight(true)) {
        $('#team a').css($updateType, $newValue);
    } else {
        $('#join a').css($updateType, $newValue);
    }
}

//Handling cookies for scrolling to selected section
var cookie = getCookie("ScrollTarget");
if (cookie != null) {
    console.log(cookie);
    $('html,body').clearQueue()
    $('html,body').animate({ scrollTop: $("."+cookie).offset().top - 75 }, {duration: 2000, easing: 'easeInOutQuint'});
    eraseCookie("ScrollTarget");
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
}