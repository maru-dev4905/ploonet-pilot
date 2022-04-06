$(document).ready(function(){
    var inquiryOpenBtn              = $(".inquiry-btn");
    var addProjectOpenBtn           = $(".addProject");
    var popupCloseBtn               = $(".popup .close-btn");
    var inquiryPopup                = $(".popup.inquiry");
    var sendPopup                   = $(".popup.send");
    var addProjectPopup             = $(".popup.addProjectPopup");
    var dim                         = $(".dim");
    var inquiryPopupBtn             = $(".popup .inquiryPopup-btn");
    var addPPTPagePopupOpenBtn      = $(".popup.addProjectPopup .next-btn");
    var addPPTPagePopup             = $(".popup.addPPTPagePopup");

    inquiryOpenBtn.click(function(){
        inquiryPopup.addClass("show");
        dim.addClass("show");
    });
    popupCloseBtn.click(function(){
        var th = $(this);

        th.parent().removeClass("show");
        dim.removeClass("show");
    });
    
    inquiryPopupBtn.click(function(){
        sendPopup.addClass("show");

        inquiryPopup.removeClass("show");
    });

    addProjectOpenBtn.click(function(){
        addProjectPopup.addClass("show");
        dim.addClass("show");
    });

    addPPTPagePopupOpenBtn.click(function(){
        addProjectPopup.removeClass("show");

        addPPTPagePopup.addClass("show");
    });




    var removeOpenBtn                   = $(".remove-btn");
    var removeCheckPopup            = $(".popup.removeCheckPopup");

    removeOpenBtn.click(function(){
        removeCheckPopup.addClass("show");
        dim.addClass("show");
    });



    var removeBtn                   = $(".removeCheckPopup .next-btn");
    var removePopup                 = $(".popup.removePopup");

    removeBtn.click(function(){
        removeCheckPopup.removeClass("show");
        removePopup.addClass("show");
    });


    var copyBtn                     = $(".copy-btn");
    var copyPopup                   = $(".popup.copyPopup");
    var copyPopupBtn                = $(".popup.copyPopup .col + button");

    copyBtn.click(function(){
        copyPopup.addClass("show");
        dim.addClass("show");
    });

    copyPopupBtn.click(function(){
        copyPopup.removeClass("show");
        dim.removeClass("show");
    });


    
    var downloadBtn                 = $(".download-btn");
    var downloadPopup               = $(".downloadPopup");
    var downloadPopupBtn            = $(".downloadPopup .col + button");

    downloadBtn.click(function(){
        downloadPopup.addClass("show");
        dim.addClass("show");
    });

    downloadPopupBtn.click(function(){
        downloadPopup.removeClass("show");
        dim.removeClass("show");
    });
});