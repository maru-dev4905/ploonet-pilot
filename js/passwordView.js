$(document).ready(function(){
    var passwordViewBtn = $(".passwordViewBtn");

    passwordViewBtn.click(function(){
        var th = $(this);

        if(th.hasClass("open")){
            th.removeClass("open");
            th.prev().attr("type","password");
        }else{
            th.addClass("open");
            th.prev().attr("type","text");
        }

    });
});