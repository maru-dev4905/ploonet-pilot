$(document).ready(function(){
    var header      = $("header");
    var body        = $("body");
    var scrollTop;

    $(window).scroll(function(){
        scrollTop = $(this).scrollTop();

        if(scrollTop > header.innerHeight()){
            body.addClass("scroll");
        }else{
            body.removeClass("scroll");
        }
    });
});