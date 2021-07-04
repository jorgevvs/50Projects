let img = document.querySelectorAll(".container div");
let body = document.querySelector("body");

img.forEach((imagem) => {
    imagem.addEventListener('click',()=>{
        removerAtivos()
        imagem.classList.add("show")
        if(imagem.classList.contains('1')) body.style.backgroundColor = "rgb(55, 137, 193)"
        if(imagem.classList.contains('2')) body.style.backgroundColor = "#1C96A0"
        if(imagem.classList.contains('3')) body.style.backgroundColor = "#803F2D"
        if(imagem.classList.contains('4')) body.style.backgroundColor = "#D9C5A6"
        if(imagem.classList.contains('5')) body.style.backgroundColor = "#0A3679"
    })
})
function removerAtivos(){
    img.forEach((imagem) => {
        imagem.classList.remove("show")
    })
}


