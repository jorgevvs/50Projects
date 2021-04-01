let display = document.querySelector(".display")
let percent = 0;
let percentplus = setInterval(addPercent,40);
let body = document.querySelector("body")


window.addEventListener("load", ()=>{  
    body.classList.add("clean")

})

function addPercent(){
    percent ++
display.innerHTML = percent + "%"
    if(percent == 100){
        clearInterval(percentplus)
        display.classList.add("vanish")
    }
}