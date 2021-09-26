// const sliderElement = document.querySelector(".slider-element")

// let pos = {
//     left: 0,
//     top: 0
// }


// const move = (element)=>{
//     const x = -1* element.movementX;
//     const balance = element.clientX - pos.left;

//     //x > 0 ? sliderElement.scrollLeft += 10 : sliderElement.scrollLeft -= 10
//     console.log(balance)
//     sliderElement.scrollLeft += (-0.08*balance)
// }

// sliderElement.addEventListener("mousedown", (e)=>{
    
//     pos = {
//         left: e.clientX, //500
//     }

//     sliderElement.addEventListener("mousemove", move)
// }, false)

// document.addEventListener("mouseup", ()=>{
//     sliderElement.removeEventListener("mousemove", move)
// })


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    },
        dots: false,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true
    });
  });//home page slider

