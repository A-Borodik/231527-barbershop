$(document).ready(function() {
    $("a.login").click(function() {
        $(".popup").removeClass("popup-disabled");
        $(".popup-overlay").removeClass("popup-disabled");
    });
    $(".popup-content-close").click(function() {
        $(".popup").addClass("popup-disabled");
        $(".popup-overlay").addClass("popup-disabled");
    });
    $(".popup-overlay").click(function() {
        $(".popup").addClass("popup-disabled");
        $(".popup-overlay").addClass("popup-disabled");
    });    
});        