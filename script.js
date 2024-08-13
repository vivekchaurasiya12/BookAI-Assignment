var initialPath = `M 0 100 Q 650 100 1300 100` 
var finalPath = `M 0 100 Q 650 100 1300 100`

var string = document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
    initialPath = `M 0 100 Q ${dets.x} ${dets.y} 1300 100` 

    gsap.to("svg path",{
        attr:{d:initialPath},  
        duration:1,
        ease:"power3.out"
    })
})
string.addEventListener("mouseleave",function(dets){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1,
        ease: "elastic.out(1,0.1)"
    })
})

var tl = gsap.timeline()
tl.from(".header .logo",{
    y:30,
    opacity:0,
    duration:1 ,
    delay:1
})
tl.from(".header nav",{
    y:30,
    opacity:0,
    duration:1 
})
tl.from(".header #string",{
    y:30,
    opacity:0,
    duration:1 
})

