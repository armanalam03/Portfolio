
window.onload = (e) => {
    console.log("page is fully loaded");
    
    e.preventDefault();
    var tl = gsap.timeline();

  // show tiles
  tl.to("ul.transition li",{
    duration: 1,
    scaleY: 0,
    transformOrigin: "top right",
    stagger: .2
  })

  tl.from("span.name span",{
    duration: 4,
    translateY: 250,
    transformOrigin: "top right",
    ease: "back.out",
    stagger: {
      each: .2,
    },
  }, "-=1.5")
}; 

let name = document.getElementById("name")
let letter = document.getElementsByClassName("letter")
window.addEventListener("scroll", (e) => {
  // name.style.opacity = `${}`
  // console.log(e)
})

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".photo-card");
let container = document.querySelector('#content')

let scrollTween = gsap.to(sections, {
  xPercent: -200 * (sections.length - 1),
  ease: "none",
  duration: 6,
  scrollTrigger: {
    trigger: ".photography-container",
    pin: true,
    scrub: true,
    end: `+=${container.offsetWidth}`
  }
});

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// let smoother = ScrollSmoother.create({
//   wrapper: '#wrapper',
//   content: '#content',
//   smooth: 2,
// })

