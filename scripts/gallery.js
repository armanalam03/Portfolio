const images = [
    {
        id: 1,
        src: "LRM_20221125_174703-2.png",
        orientation: "portrait",
    },
    {
        id: 2,
        src: "LRM_20230105_154947.png",
        orientation: "portrait",
    },
    {
        id: 3,
        src: "IMG_20221026_172353.png",
        orientation: "portrait",
    },
    {
        id: 4,
        src: "LRM_20230105_135812.png",
        orientation: "portrait",
    },
    {
        id: 5,
        src: "IMG20230204144835.jpg",
        orientation: "landscape",
    },
    {
        id: 6,
        src: "IMG_20230119_145119_328.png",
        orientation: "portrait",
    },
    {
        id: 7,
        src: "IMG_20230119_145222_228.png",
        orientation: "portrait",
    },
    {
        id: 8,
        src: "IMG_20230119_145318_368.png",
        orientation: "portrait",
    },
    {
        id: 9,
        src: "Gold.png",
        orientation: "portrait",
    },
    {
        id: 10,
        src: "IMG20230105105156.png",
        orientation: "landscape",
    },
]

const grid = document.getElementById("gallery-grid");
const body = document.querySelector("body")
const container = document.querySelector(".gallery-container")

window.addEventListener("DOMContentLoaded", () => {
    let displayImg = images.map( img => {
        return `
        <div class="img-container ${img.orientation}" style='background-image: url(../images/gallery/${img.src})'></div>
        `     
        /* return `
        <div class="img-container ${img.orientation}"></div>
        ` */   
    })
    displayImg = displayImg.join("")
    grid.innerHTML = displayImg
})

window.addEventListener("DOMContentLoaded", () => {
    console.logdocument.querySelector(".scroll-content")
})

/* const scroller = document.querySelector("#scroller");
const output = document.querySelector("#output");
*/
/* const scroll = document.querySelector("#scroll")
document.addEventListener("scroll", (event) => {
    const math = 0.151*(window.scrollY)
   console.log("math= " + math)
//   scroll.style.top = `${math}%`
}); */

const fullImgContainer = document.querySelector(".full-image-container")
const fullImg = document.querySelector(".full-image")
/* window.addEventListener("load", () => {
    const imageElements = document.querySelectorAll(".img-container")
    imageElements.forEach(e => {
        e.addEventListener('click', click => {
            console.log(click.srcElement.style.backgroundImage.slice(5, -2))            
            fullImgContainer.style.visibility = "visible"
            fullImg.src = click.srcElement.style.backgroundImage.slice(5, -2)
            console.log(fullImg.clientWidth)
            if(fullImg.clientWidth>1000){
                fullImg.style.width = `1000px`
            } else{
                fullImg.style.width = `${(fullImg.clientWidth)/1.7}px`
            }
            
            body.style.overflow = "hidden"
        })
    })
}) */

/* document.addEventListener("scroll", (e)=>{
    console.log(e)
}) */
