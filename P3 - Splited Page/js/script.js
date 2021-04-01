let play = document.querySelector(".play");
let xbox = document.querySelector(".xbox");

play.addEventListener('mouseenter',()=>{
    play.classList.add("show")
})
play.addEventListener('mouseleave',()=>{
    play.classList.remove("show")
})
xbox.addEventListener('mouseenter',()=>{
    xbox.classList.add("show")
})
xbox.addEventListener('mouseleave',()=>{
    xbox.classList.remove("show")
})
