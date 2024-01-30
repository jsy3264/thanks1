$(document).ready(function () {
    $(".open").click(function () {
        $(".m-wrap").addClass("active");
    })
    $(".close").click(function () {
        $(".m-wrap").removeClass("active");
    })
    $(".first-nav>a").click(function () {
        if ($(this).parent().find(".sub-menu").is(":hidden")) {
            $(".sub-menu").slideUp();
            $(this).parent().find(".sub-menu").slideDown();
            $(".arrow").removeClass("fa-solid fa-minus").addClass("fa-solid fa-plus")
            $(this).find(".arrow").removeClass("fa-solid fa-plus").addClass("fa-solid fa-minus");

        } else {
            $(".sub-menu").slideUp();
            $(".arrow").removeClass("fa-solid fa-minus").addClass("fa-solid fa-plus");
        }
    })
    $(".first-dnav>a").mouseenter(function () {
        $(".sub-dmenu").slideUp();
        $(this).parent().find(".sub-dmenu").stop().slideDown();
        $(".full-back").stop().slideDown();
    })
    $(".sub-dmenu").mouseleave(function () {
        $(this).parent().find(".sub-dmenu").stop().slideUp();
        $(".full-back").stop().slideUp();
    })

    $(".bts").click(function () {
        $(".bts-g").show();
    })
    $(".bts-h button").click(function () {
        $(".bts-g").hide();
    })

    var $scroll = null;
    $(window).on("scroll", function () {
        $scroll = $(window).scrollTop();
        if ($scroll > 50) {
            $("header").addClass("active")
        } else {
            $("header").removeClass("active")
        }
    })
    $(".title").click(function () {
        if ($(this).parent().find(".sub").is(":hidden")) {
            $(".sub").slideUp();
            $(this).parent().find(".sub").slideDown();
            $(".fold_btn").removeClass("fa-solid fa-angle-up").addClass("fa-solid fa-angle-down")
            $(this).find(".fold_btn").removeClass("fa-solid fa-angle-down").addClass("fa-solid fa-angle-up");

        } else {
            $(".sub").slideUp();
            $(".fold_btn").removeClass("fa-solid fa-angle-up").addClass("fa-solid fa-angle-down");
        }
    })
    // let f_fold_btn = document.querySelectorAll('footer .main .fold_btn')
    // let f_menu_sub = document.querySelectorAll('footer .main .sub')
    // let f_menu_on = new Array()


    // f_fold_btn.forEach(function (target, index) {
    //     f_menu_on[index] = false
    //     target.addEventListener('click', function (e) {
    //         e.preventDefault()
    //         if (f_menu_on[index]) { 
    //             f_menu_sub[index].style.display = 'none'
    //             target.style.transform = 'rotate(0)'
    //             f_menu_on[index] = false
    //         } else {
    //             f_menu_sub[index].style.display = 'block'
    //             target.style.transform = 'rotate(180deg)'
    //             f_menu_on[index] = true
    //         }
    //     })
    // })
    $(function () {

        var $iniScroll = null;

        $iniScroll = $(window).scrollTop();
        $(window).scroll(function () {
            // console.log("스크롤이 되요")
            var $scrollTop = $(window).scrollTop();
            if ($iniScroll < $scrollTop) {
                $(".footer-side-fix").addClass("active")
                $("header").addClass("active")
                // console.log("스크롤바가 내려가고 있어요")
            } else {
                $(".footer-side-fix").removeClass("active")
                $("header").removeClass("active")
                // console.log("스크롤바가 올라가고 있어요")
            }
            $iniScroll = $scrollTop;
        })

    })
})
