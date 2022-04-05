$(document).ready(function(){
    var inquiryOpenBtn      = $(".inquiry-btn");
    var popupCloseBtn       = $(".popup .close-btn");
    var inquiryPopup        = $(".popup.inquiry");
    var sendPopup           = $(".popup.send");
    var dim                 = $(".dim");
    var inquiryPopupBtn     = $(".popup .inquiryPopup-btn");

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
});