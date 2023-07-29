 

// naviation up down  while scroll 
// var lastScrollTop = 0;

// var navbar = document.querySelector("nav");

// window.addEventListener("scroll",function(){
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if(scrollTop > lastScrollTop){
//         navbar.style.top = "-120px";
//     }
//     else {
//         navbar.style.top = "0";
//     }
//     lastScrollTop = scrollTop;
// }) 

var tl = gsap.timeline();

tl.from("#main .centre .img1 img",{
    scale: .5,
    opacity:0,
    delay: .5,
    duration:.8,
    
})

tl.from("#main .centre h1",{
    x: -100,
    opacity:0,
    duration:.5,

})

gsap.from("#page2 .nav2 h1",{
    x: -1,
    duration:.2,
    opacity: 0,
    scrollTrigger:{
        trigger:"#page2 .nav2 h1",
        scroller:"body",
        start: "top 70%",
        end: "top 40%",
        scrub:3
    }
})

gsap.from("#page2 .image2 li",{
    opacity:0,
    duration: .3,
    y:50,
    stagger : .2,
    scrollTrigger:{
        trigger:"#page2 .image2 li",
        scroller:"body",
        start: "top 80%",
        end:"top 20%",
        scrub:3
    }
})

gsap.from("#page3 .nav3 h1,h6",{
    y:-20,
    duration: .3,
    opacity:0,
    scrollTrigger:{
        trigger:"#page3 .nav3 h1",
        scroller: "body",
        start:"top 70%",
        end:"top 50%",
        scrub: 3
    }
})

tl.from("#page3 .images3 .left3,.right3",{
    scale: .5,
    delay: .5,
    duration: .8,
    opacity:0,
    scrollTrigger:{
        trigger:"#page3 .images3 .left3,.right3",
        scroller: "body",
        start:"top 65%",
        end:"top 40%",
        scrub: 3
    }
})

gsap.from("#page4 .center4 .left4",{
    
    x:-50,
    opacity:0,
    duration: .8,
    stagger: .25,
    scrollTrigger:{
        trigger:"#page4 .left4",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        scrub: 3,
    }
})

gsap.from("#page4 .center4 .right4",{
    scale: .8,
    opacity:0,
    duration: .5,
    scrollTrigger:{
        trigger:"#page4 .center4 .right4",
        scroller: "body",
        start: "top 60%",
        end: "top 40%",
        scrub: 3,
    }
})

gsap.from("#page5 .nav5 h1, h6",{
    opacity:0,
    y : -20,
    duration:.2,
    scrollTrigger:{
        trigger:"#page5 .nav5 ",
        scroller:"body",
        start: "top 60%",
        end : "top 40%",
        scrub: 3
    }
})

gsap.from("#page5 .centre5 .left5, .right5",{
    scale: .5,
    opacity:0,
    duration:.2,
    scrollTrigger:{
        trigger:"#page5 .centre5 .left5, .right5",
        scroller:"body",
        start: "top 60%",
        end : "top 40%",
        scrub:3
    }
})
gsap.from("#page6 #nav6",{
    y : -50,
    opacity:0,
    duration: .2,
    scrollTrigger:{
        trigger:"#page6 #nav6",
        scroller:"body",
        start: "top 60%",
        end : "top 40%",
        scrub: 3
    }
})

gsap.from("#page6 .centre6 .images6",{
    // scale: .3,
    x: -100,
    opacity:0,
    duration: 1,
    stagger: .5,
    scrollTrigger:{
        trigger:"#page6 .centre6 .images6",
        scroller:"body",
        start: "top 60%",
        end : "top 40%",
        scrub:3
    }
})
gsap.from("#page7 .nav7 h1",{
    scale: .5,
    opacity:0,
    duration: .2,
    scrollTrigger:{
        trigger:"#page7  .nav7 h1",
        scroller:"body",
        start: "top 60%",
        end : "top 40%",
        scrub: 3
    }
})

gsap.from("#page7 .cent7 .images7",{
    // x: -500,
    scale: .5,
    opacity:0,
    duration: 2.5,
    stagger: .5,
    scrollTrigger:{
        trigger:"#page7 .cent7 .images7",
        scroller:"body",
        start: "top 70%",
        end : "top 40%",
        scrub:3
    }
})
gsap.from("#page8 .cent8 .b1,.b2",{
    y : 50,
    opacity:0,
    duration:.3,
    scrollTrigger:{
        trigger:"#page8 .cent8 .b1,.b2",
        scroller:"body",
        start: "top 70%",
        end : "top 40%",
        scrub:3
    }
})





// simple code 
var navbar = document.querySelector("nav");
var lastScroll = window.scrollY;

window.addEventListener("scroll", function(){

    if(lastScroll < window.scrollY){
        navbar.style.top = "-120px";
        console.log("down")
    }
    else{
        navbar.style.top = "0";
        console.log(" up ");
    }

    lastScroll = window.scrollY;
})

// custom cursor
// var main = document.querySelector("#page2")
var page = document.querySelector(".imgages")
var cursor = document.querySelector("cust-cursor2")

// mouse move, mouse enter, mouse leave

page.addEventListener("mousemove", function(det){

    cursor.style.left = `${det.x + 10}px`
    cursor.style.top = `${det.y + 10}px`
    //  console.log(det.x)
})

