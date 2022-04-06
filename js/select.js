$(document).ready(function(){
    var selectCurrent = $(".current-select");
    
    selectCurrent.click(function(){
        var th = $(this);

        if(th.parent().hasClass("show")){
            
            th.parent().removeClass("show");
        
        }else{
            
            th.parent().addClass("show");
        
        }
    });
    
    var selectListBtn = $(".select-list button");

    selectListBtn.click(function(){
        var th          = $(this);
        var spanText    = th.children("span").text();
        var pText       = th.children("p").text();
        
        console.log(spanText);
        console.log(pText);

        selectListBtn.removeClass("show");
        
        th.removeClass("current");
        
        th.parent().parent().prev().children("span").text(spanText);
        th.parent().parent().prev().children("p").text(pText);
        
    });
});