$("documnet").ready(function(){
    let typed = new Typed("#typed1", {
        stringsElement: "#typed",
        typeSpeed: 50
    })
    $("#wave-1").wavify({
        height: 800,
        bones: 4,
        color: "crimson",
        speed: 0.15,
        amplitude: 40
    })
    $("#wave-2").wavify({
        height: 700,
        bones: 5,
        color: "tomato",
        speed: 0.15,
        amplitude: 40
    })
})