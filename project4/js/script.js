let cards = document.querySelectorAll(".card");


window.addEventListener("scroll", check);

check()
function check(){
    const bottom = window.innerHeight / 5 *4;

    cards.forEach(card=> {
        const cardTop = card.getBoundingClientRect().top

        if(cardTop < bottom){
            card.classList.add('on');
        }
        else{
            card.classList.remove('on')
        }
    })
}

