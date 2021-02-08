$(document).ready(function(){
    $('.js-about-me').click(function(){
        $(".js-about-me").css("background-color","rgb(249, 248, 113)");
        $(".js-skills").css("background-color","#ffffff");
        $(".js-education").css("background-color","#ffffff");
        $(".js-contact").css("background-color","#ffffff");
        $('.skill-section').addClass("js-hide");
        $('.edu').addClass("js-hide");
        $('.contact').addClass("js-hide");
        $('.index').removeClass("js-hide");
    });
    $('.js-skills').click(function(){
        $(".js-skills").css("background-color","rgb(249, 248, 113)");
        $(".js-about-me").css("background-color","#ffffff");
        $(".js-education").css("background-color","#ffffff");
        $(".js-contact").css("background-color","#ffffff");
        $('.index').addClass("js-hide");
        $('.edu').addClass("js-hide");
        $('.contact').addClass("js-hide");
        $('.skill-section').removeClass("js-hide");
    });
    $('.js-education').click(function(){
        $(".js-education").css("background-color","rgb(249, 248, 113)");
        $(".js-skills").css("background-color","#ffffff");
        $(".js-about-me").css("background-color","#ffffff");
        $(".js-contact").css("background-color","#ffffff");
        $('.index').addClass("js-hide");
        $('.skill-section').addClass("js-hide");
        $('.contact').addClass("js-hide");
        $('.edu').removeClass("js-hide");
    });
    $('.js-contact').click(function(){
        $(".js-contact").css("background-color","rgb(249, 248, 113)");
        $(".js-skills").css("background-color","#ffffff");
        $(".js-education").css("background-color","#ffffff");
        $(".js-about-me").css("background-color","#ffffff");
        $('.index').addClass("js-hide");
        $('.edu').addClass("js-hide");
        $('.skill-section').addClass("js-hide");
        $('.contact').removeClass("js-hide");
    });

})