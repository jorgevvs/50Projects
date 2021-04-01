let img = document.querySelectorAll(".container div");

img.forEach((imagem) => {
    imagem.addEventListener('click',()=>{
        removerAtivos()
        imagem.classList.add("show")
    })
})
function removerAtivos(){
    img.forEach((imagem) => {
        imagem.classList.remove("show")
    })
}