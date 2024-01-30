$(function () {
    var swidth = 0;
    var slideCount = 1;
    var slideLength = 0;
    var auto = null;
    var slidePosition = 0;
    var $sliders = $(".sliders");
    var $slides = $sliders.children(".slides");

    var $page = $(".pagenation");
    var $pageDot = $page.children(".dot");
    var dotCount = 0;

    function init() {
        var slider_wrap = $(".slide-g").width();
        console.log("슬라이드 wrap 너비 : " + slider_wrap)
        swidth = slider_wrap / slideCount;
        $slides.css({ "width": swidth });
        slideLength = $(".slides").length;
        console.log("슬라이드스 수 : " + slideLength)
        $sliders.css({ "width": swidth * slideLength })

    }
    init();

    function dot() {
        dotCount = slideLength - slideCount + 1;
        for (i = 1; i < dotCount; i++) {
            $page.append('<span class="dot">' + (i + 1) + '</span>');
        }
        $pageDot = $page.children(".dot");
    }
    dot();



    function slideEvent() {
        $(".nextbt").click(function () {
            nextPlay();
        })
        $(".prevbt").click(function () {
            prevPlay();
        })

        function slideMove() {
            $sliders.stop().animate({
                left: -swidth * slidePosition
            })

        }

        function nextPlay() {
            if (slidePosition == slideLength - slideCount) {
                slidePosition = 0
            } else {
                slidePosition++;
            }
            slideMove();
            page();
        }
        function prevPlay() {
            if (slidePosition == 0) {
                slidePosition = slideLength - slideCount;
            } else {
                slidePosition--;
            }
            slideMove();
            page();
        }
        function autoPlay() {
            auto = setInterval(function () {
                nextPlay();
            }, 4000)
        }
        autoPlay();

        function page() {
            $pageDot.removeClass("active");
            $pageDot.eq(slidePosition).addClass("active")
        }
        $(".dot").each(function (index) {
            $(this).click(function () {
                slidePosition = index;
                page();
                slideMove();
            })

        })
    }
    slideEvent();

    $(window).resize(function () {
        init();
        $(".sliders").stop().animate({
            left: -swidth * slidePosition
        })
        return false;
    })
})