function setCookie(name, value) {
    var expires = "; expires=0";

    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

$("#welcome").on("click", function() {
    setCookie("ScrollTarget", "welcomecontainer");
})

$("#games").on("click", function() {
    setCookie("ScrollTarget", "gamescontainer");
})

$("#news").on("click", function() {
    setCookie("ScrollTarget", "newscontainer");
})

$("#team").on("click", function() {
    setCookie("ScrollTarget", "teamcontainer");
})

$("#join").on("click", function() {
    setCookie("ScrollTarget", "joincontainer");
})


//ANNOUNCEMENT BAR
$(document).ready(function(){
    $(".m-close").click(function(){
        $(".m-bar").hide(600);
    });
});