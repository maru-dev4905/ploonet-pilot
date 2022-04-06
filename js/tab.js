$(document).ready(function(){
    var tabBtn = $(".tab-btn");
    var tabContent = $(".tab-content");

    tabBtn.click(function(){
        var th = $(this);
        var thIndex = th.index();

        tabBtn.removeClass("active blue-style-btn");
        th.addClass("active blue-style-btn");

        tabContent.removeClass("active");
        tabContent.eq(thIndex).addClass("active");
    });
});