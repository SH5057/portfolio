$("document").ready(function(){

    let shape = 0
    $(".m-btn").click(function(){
        if(shape == 0){
            $(".m-btn").addClass("on")
            $(".m-nav").addClass("on")
            shape++
        console.log(shape)
        } else {
            $(".m-btn").removeClass("on")
            $(".m-nav").removeClass("on")
            shape = 0
        }

        // $(this).toggleClass("on")
        // $(".m-nav").toggleClass("on")
    })

    $(".header .etc ul li ul li").click(function(){
        let i = $(this).index();
        if(i==0){
            localStorage.setItem("language", "kr")
        }else{
            if (i==1) {
                localStorage.setItem("language", "en")
            } else {
                localStorage.setItem("language", "jp")
            }
        }
    })

    const font_list = localStorage.getItem("font")

    if(font_list != ""){
        $("html").addClass(font_list)
    }
    // != 다르다면.  == 같다면.

    $("html").attr("data-dark", false)

    const dark_mode = localStorage.getItem("dark");
    console.log(dark_mode)

    if(dark_mode == "true"){
        $(".dark-btn i").removeClass("fa-moon").addClass("fa-sun")
        $("html").attr("data-dark", true)
        $(".header .etc ul li").eq(0).find("i").removeClass("fa-moon").addClass("fa-sun")
        $(".contact-content .sns ul li img").attr("src", "images/talk-dark.png")
    }else{
        $(".dark-btn i").removeClass("fa-sun").addClass("fa-moon")
        $("html").attr("data-dark", false)
        $(".header .etc ul li").eq(0).find("i").removeClass("fa-sun").addClass("fa-moon")
        $(".contact-content .sns ul li img").attr("src", "images/talk.png")
    }

    $(".header .etc ul li").eq(0).click(function(){
        $(".header .etc ul li").eq(0).find("i").toggleClass("fa-sun fa-moon")
        $(".dark-btn").find("i").toggleClass("fa-sun fa-moon")

        if ($("html").attr("data-dark") == "false") {
            $("html").attr("data-dark", true)
            localStorage.setItem("dark", true)
            $(".contact-content .sns ul li img").attr("src", "images/talk-dark.png")
        } else {
            $("html").attr("data-dark", false)
            localStorage.removeItem("dark")
            $(".contact-content .sns ul li img").attr("src", "images/talk.png")
        }
    })
    $(".dark-btn").click(function(){
        $(".header .etc ul li").eq(0).find("i").toggleClass("fa-sun fa-moon")
        $(".dark-btn").find("i").toggleClass("fa-sun fa-moon")

        if ($("html").attr("data-dark") == "false") {
            $("html").attr("data-dark", true)
            localStorage.setItem("dark", true)
            $(".contact-content .sns ul li img").attr("src", "images/talk-dark.png")
        } else {
            $("html").attr("data-dark", false)
            localStorage.removeItem("dark")
            $(".contact-content .sns ul li img").attr("src", "images/talk.png")
        }
    })

    $(".font-box .icon").click(function(){
        $(".font-box .icon").toggleClass("on")
        $(".font-box ul").toggleClass("on")
    })

    let font = [
        " 'OAGothic-ExtraBold' ",
        " 'TTTtangsbudaejjigaeB' ",
        " 'PuradakGentleGothicR' ",
        " 'HS-Regular' "
    ]
    $(".font-box ul li").mouseover(function(){
        let i = $(this).index()
        $("html").css("font-family", font[i ])
    }).mouseout(function(){
        $("html").css("font-family", "")
    })
    $(".font-box ul li").click(function(){
        let i = $(this).index();
        if (i == 0) {
            $("html").removeClass()
            localStorage.removeItem("font")
        } else {
            $("html").removeClass().addClass("font"+i)
            localStorage.setItem("font", "font"+i)
        }
    })

})