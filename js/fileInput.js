$(document).ready(function(){
    var fileInput   = $("#fileInput");
    var TEXT        = "로<br>페이지를 생성하시겠습니까?";
    var addBtn      = $(".addBtn");
    
    fileInput.change(function(){
        var th = $(this);
        var fileName = $("<span></span>");
        
        th.next().find(".cont i").removeClass("upload-icon");
        th.next().find(".cont i").addClass("file-icon");

        var fileValue = th.val().split("\\");
        fileName = fileName.text(fileValue[fileValue.length-1]); // 파일명
        fileName = fileName.text();

        th.next().find(".cont p").html(`
            <span>${fileName}</span>
            ${TEXT}
        `);

        addBtn.removeClass("gray-style-btn");
        addBtn.addClass("blue-style-btn");
    });

});