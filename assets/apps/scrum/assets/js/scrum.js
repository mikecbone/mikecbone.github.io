//__________________Setup Initial Values__________________
//Yesterday
var yesterdayArray = localStorage.getItem('yesterdayItems') ? yesterdayArray = JSON.parse(localStorage.getItem('yesterdayItems')) : [];
localStorage.setItem('yesterdayItems', JSON.stringify(yesterdayArray));
const ydata = JSON.parse(localStorage.getItem('yesterdayItems'));

//Today
var todayArray = localStorage.getItem('todayItems') ? todayArray = JSON.parse(localStorage.getItem('todayItems')) : [];
localStorage.setItem('todayItems', JSON.stringify(todayArray));
const tdata = JSON.parse(localStorage.getItem('todayItems'));

//Tomorrow
var tomorrowArray = localStorage.getItem('tomorrowItems') ? tomorrowArray = JSON.parse(localStorage.getItem('tomorrowItems')) : [];
localStorage.setItem('tomorrowItems', JSON.stringify(tomorrowArray));
const tmdata = JSON.parse(localStorage.getItem('tomorrowItems'));

//Blocked
var blockedArray = localStorage.getItem('blockedItems') ? blockedArray = JSON.parse(localStorage.getItem('blockedItems')) : [];
localStorage.setItem('blockedItems', JSON.stringify(blockedArray));
const bdata = JSON.parse(localStorage.getItem('blockedItems'));

//TIL
var TILArray = localStorage.getItem('TILItems') ? TILArray = JSON.parse(localStorage.getItem('TILItems')) : [];
localStorage.setItem('TILItems', JSON.stringify(TILArray));
const TILdata = JSON.parse(localStorage.getItem('TILItems'));

//AOB
var AOBArray = localStorage.getItem('AOBItems') ? AOBArray = JSON.parse(localStorage.getItem('AOBItems')) : [];
localStorage.setItem('AOBItems', JSON.stringify(AOBArray));
const AOBdata = JSON.parse(localStorage.getItem('AOBItems'));

//Theme
var themeNo = localStorage.getItem('themeNo') ? theme = localStorage.getItem('themeNo') : 0;
localStorage.setItem('themeNo', themeNo);
themeNo = parseInt(themeNo);
setTheme();

//__________________Get pre-existing items__________________
//Yesterday
if (ydata != null) {
	ydata.forEach(item => {
		$(".yesterday_ul").append(item);
	});
}

//Today
if (tdata != null) {
	tdata.forEach(item => {
		$(".today_ul").append(item);
	});
}

//Tomorrow
if (tmdata != null) {
	tmdata.forEach(item => {
		$(".tomorrow_ul").append(item);
	});
}

//Blocked
if (bdata != null) {
	bdata.forEach(item => {
		$(".blocked_ul").append(item);
	});
}

//TIL
if (TILdata != null) {
	TILdata.forEach(item => {
		$(".TIL_ul").append(item);
	});
}

//AOB
if (AOBdata != null) {
	AOBdata.forEach(item => {
		$(".AOB_ul").append(item);
	});
}

$('li').each(function(idx, li) {
	if (li.scrollHeight >  li.offsetHeight) {
    	$(this).css('height', '50px');
    	$(this).css('line-height', '22px');
    	$(this).css('padding', '3px 0 3px 26px');
	}
});

checkLiHeight()

//__________________Check Off Specific Items Or Remove__________________
$("ul").on("click", "li", function(e){
	$(this).toggleClass("completed");
	$(this).contentEditable = true;
});

//__________________Cltrl click on item to delete__________________
$(".yesterday_ul").on("click", "li", function(event){
	if (event.ctrlKey) {
        //Update the localStorage
		var index = $(this).index();
		yesterdayArray.splice(index, 1);
		localStorage.setItem('yesterdayItems', JSON.stringify(yesterdayArray));

		//Remove the item
        $(this).fadeOut(250,function(){
			$(this).remove();
		});
		event.stopPropagation();
    }
});

$(".today_ul").on("click", "li", function(event){
	if (event.ctrlKey) {
        //Update the localStorage
		var index = $(this).index();
		todayArray.splice(index, 1);
		localStorage.setItem('todayItems', JSON.stringify(todayArray));

		//Remove the item
        $(this).fadeOut(250,function(){
			$(this).remove();
		});
		event.stopPropagation();
    }
});

$(".tomorrow_ul").on("click", "li", function(event){
	if (event.ctrlKey) {
        //Update the localStorage
		var index = $(this).index();
		tomorrowArray.splice(index, 1);
		localStorage.setItem('tomorrowItems', JSON.stringify(tomorrowArray));

		//Remove the item
        $(this).fadeOut(250,function(){
			$(this).remove();
		});
		event.stopPropagation();
    }
});

$(".blocked_ul").on("click", "li", function(event){
	if (event.ctrlKey) {
		var index = $(this).index();
		blockedArray.splice(index, 1);
		localStorage.setItem('blockedItems', JSON.stringify(blockedArray));

        $(this).fadeOut(250,function(){
			$(this).remove();
		});
		event.stopPropagation();
    }
});

$(".TIL_ul").on("click", "li", function(event){
	if (event.ctrlKey) {
		var index = $(this).index();
		TILArray.splice(index, 1);
		localStorage.setItem('TILItems', JSON.stringify(TILArray));

        $(this).fadeOut(250,function(){
			$(this).remove();
		});
		event.stopPropagation();
    }
});

$(".AOB_ul").on("click", "li", function(event){
	if (event.ctrlKey) {
		var index = $(this).index();
		AOBArray.splice(index, 1);
		localStorage.setItem('AOBItems', JSON.stringify(AOBArray));

        $(this).fadeOut(250,function(){
			$(this).remove();
		});
		event.stopPropagation();
    }
});

//__________________Add item to their list__________________
$(".yesterday_container input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new item text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$(".yesterday_ul").append("<li> &bull; " + todoText + "</li>");

		//Update the localStorage
		yesterdayArray.push("<li> &bull; " + todoText + "</li>");
		localStorage.setItem('yesterdayItems', JSON.stringify(yesterdayArray));

		checkLiHeight()
	}
});

$(".today_container input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$(".today_ul").append("<li> &bull; " + todoText + "</li>");

		todayArray.push("<li> &bull; " + todoText + "</li>");
		localStorage.setItem('todayItems', JSON.stringify(todayArray));

		checkLiHeight()
	}
});

$(".tomorrow_container input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$(".tomorrow_ul").append("<li> &bull; " + todoText + "</li>");

		tomorrowArray.push("<li> &bull; " + todoText + "</li>");
		localStorage.setItem('todayItems', JSON.stringify(tomorrowArray));

		checkLiHeight()
	}
});

$(".blocked_container input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$(".blocked_ul").append("<li> &bull; " + todoText + "</li>");

		blockedArray.push("<li> &bull; " + todoText + "</li>");
		localStorage.setItem('blockedItems', JSON.stringify(blockedArray));

		checkLiHeight()
	}
});

$(".TIL_container input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$(".TIL_ul").append("<li> &bull; " + todoText + "</li>");

		TILArray.push("<li> &bull; " + todoText + "</li>");
		localStorage.setItem('TILItems', JSON.stringify(TILArray));

		checkLiHeight()
	}
});

$(".AOB_container input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$(".AOB_ul").append("<li> &bull; " + todoText + "</li>");

		AOBArray.push("<li> &bull; " + todoText + "</li>");
		localStorage.setItem('AOBItems', JSON.stringify(AOBArray));

		checkLiHeight()
	}
});

//__________________Handle buttons__________________
$(document).ready(function() {
	$(".themeButton").click(function(){
		changeTheme();
	});

	//Move items from today to yesterday and clear the rest
    $(".moveButton").click(function(){
    	yesterdayArray = [];

    	if (todayArray.length != 0) {
    		todayArray.forEach(item => {
				yesterdayArray.push(item);
			});
    	}

		todayArray = [];
		
		if (tomorrowArray.length != 0) {
    		tomorrowArray.forEach(item => {
				todayArray.push(item);
			});
		}
		
		tomorrowArray = [];

		localStorage.setItem('yesterdayItems', JSON.stringify(yesterdayArray));
		localStorage.setItem('todayItems', JSON.stringify(todayArray));
		localStorage.setItem('tomorrowItems', JSON.stringify(tomorrowArray));

        location.reload();
    });

    $(".collapseButton").click(function(){
        $("input[type='text']").fadeToggle();
    });

    $(".resetButton").click(function(){
	    if (confirm('Are you sure you want to reset?')) {
	    	localStorage.clear();
        	location.reload();
		}
    });
});

//__________________Functions__________________
function setTheme() {
	switch(themeNo) {
		case 0:
			$("body").addClass('themeOneBG');
			$("h2").addClass('themeOneH2');
			break;
		case 1:
			$("body").addClass('themeTwoBG');
			$("h2").addClass('themeTwoH2');
			break;
		case 2:
			$("body").addClass('themeThreeBG');
			$("h2").addClass('themeThreeH2');
			break;
		case 3:
			$("body").addClass('themeFourBG');
			$("h2").addClass('themeFourH2');
			break;
		case 4:
			$("body").addClass('themeFiveBG');
			$("h2").addClass('themeFiveH2');
			break;
		default:
	}
}

function changeTheme() {
	switch(themeNo) {
		case 0:
			$("body").removeClass('themeOneBG').addClass('themeTwoBG');
			$("h2").removeClass('themeOneH2').addClass('themeTwoH2');
			themeNo = 1;
			break;
		case 1:
			$("body").removeClass('themeTwoBG').addClass('themeThreeBG');
			$("h2").removeClass('themeTwoH2').addClass('themeThreeH2');
			themeNo = 2;
			break;
		case 2:
			$("body").removeClass('themeThreeBG').addClass('themeFourBG');
			$("h2").removeClass('themeThreeH2').addClass('themeFourH2');
			themeNo = 3;
			break;
		case 3:
			$("body").removeClass('themeFourBG').addClass('themeFiveBG');
			$("h2").removeClass('themeFourH2').addClass('themeFiveH2');
			themeNo = 4;
			break;
		case 4:
			$("body").removeClass('themeFiveBG').addClass('themeOneBG');
			$("h2").removeClass('themeFiveH2').addClass('themeOneH2');
			themeNo = 0;
			break;
		default:
	}
	localStorage.setItem('themeNo', themeNo);
}

function checkLiHeight() {
	$('li').each(function(idx, li) {
		if (li.scrollHeight >  li.offsetHeight) {
	    	$(this).css('height', '50px');
	    	$(this).css('line-height', '22px');
	    	$(this).css('padding', '3px 0 3px 26px');
		}
	});
}