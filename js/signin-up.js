$(document).ready(function () {
    var signup = $(".links").find("li").find("#signup");
    var signin = $(".links").find("li").find("#signin");
    var reset = $(".links").find("li").find("#reset");
    var first_input = $("form").find(".first-input");
    var hidden_input = $("form").find(".input__block").find("#repeat__password");
    var signin_btn = $("form").find(".signin__btn");


    signup.on("click", function (e) {
        $(this).parent().parent().siblings("h1").text("SIGN UP");
        $(this).parent().css("opacity", "1");
        $(this).parent().siblings().css("opacity", "0.6");
        first_input.removeClass("first-input__block").addClass("signup-input__block");
        hidden_input.css({
            "opacity": "1",
            "display": "block"
        });
        signin_btn.text("Sign up");
    });



    signin.on("click", function (e) {
        $(this).parent().parent().siblings("h1").text("SIGN IN");
        $(this).parent().css("opacity", "1");
        $(this).parent().siblings().css("opacity", "0.6");
        first_input.addClass("first-input__block")
            .removeClass("signup-input__block");
        hidden_input.css({
            "opacity": "0",
            "display": "none"
        });
        signin_btn.text("Sign in");
    });


    reset.on("click", function (e) {
        $(this).parent().css("opacity", "1");
        $(this).parent().siblings().css("opacity", "0.6");
        $(this).parent().parent().siblings("form")
            .find(".input__block").find(".input").val("");
    })

})