$("document").ready(function(){

    const work_img =[
        "https://via.placeholder.com/1200x2000",
        "https://via.placeholder.com/1200x2000/a21",
        "https://via.placeholder.com/1200x2000/d84a",
        "https://via.placeholder.com/1200x2000/f3a5",
        "https://via.placeholder.com/1200x2000/d1ffa",
        "https://via.placeholder.com/1200x2000/d1f4a"
    ]
    /*
        "../이미지폴더/파일명.확장자",
        "../이미지폴더/파일명.확장자"
        마지막에 ,(콤마) 입력 시 에러 발생.
    */

    $(".work-content").click(function(e){
        e.preventDefault()
        let i = $(this).index()
        $(".window").fadeIn()
        $(".window-content").show()
        $(".window-content img").attr("src", work_img[i])
        $("html, body").css("overflow", "hidden")
    })
    $(".window, .window-content > i").click(function(){
        $(".window").fadeOut()
        $("html, body").css("overflow", "auto")
        $(".window-content").scrollTop(0).hide()
    })
    $(".window-content .aside").click(function(){
        $(".window-content").stop().animate({
            scrollTop : 0
        })
    })

    let close = parseInt($(".window-content > i").css("top"))
    let ts = parseInt($(".window-content .aside").css("bottom"))
    

    $(".window-content").scroll(function(){
        let pos = $(".window-content").scrollTop()
        $(".window-content > i").css("top", pos+close+"px")
        //최초 닫기 버튼의 위치가 20px 모달창이 스크롤되면, 스크롤이 scrollTop값 + 20을 더한다. 그럼 해당 위치에 고정되는 원리.
        $(".window-content .aside").css("bottom", pos+TS+"px")
        console.log(pos)
    })
})