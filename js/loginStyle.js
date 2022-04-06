$(document).ready(function(){
    var idInput      = $(".container input.idInput");
    var pwInput      = $(".container input.pwInput");
    var loginBtn        = $(".container .login-btn");
    var idValCheck      = 0;
    var pwValCheck      = 0;

    idInput.on("change keyup paste",function(){
        var th = $(this);
        idValCheck = th.val().length;

        if(idValCheck == 0 || pwValCheck == 0){
            loginBtn.addClass("gray-style-btn");
            loginBtn.removeClass("blue-style-btn");
        }else{
            loginBtn.removeClass("gray-style-btn");
            loginBtn.addClass("blue-style-btn");
        }
    });
    
    pwInput.on("change keyup paste",function(){
        var th = $(this);
        pwValCheck = th.val().length;
        
        if(idValCheck == 0 || pwValCheck == 0){
            loginBtn.addClass("gray-style-btn");
            loginBtn.removeClass("blue-style-btn");
        }else{
            loginBtn.removeClass("gray-style-btn");
            loginBtn.addClass("blue-style-btn");
        }
    });
});