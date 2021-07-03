let sec = document.querySelector(".sec");
let min = document.querySelector(".min")
let hour = document.querySelector('.hour')
let rotatesec = 0;
let rotatemin = 0;


function clock(){
    let data = new Date();

    rotatesec = 'rotate(' +(data.getSeconds()*6) + 'deg)';
    rotatemin = 'rotate(' +(data.getMinutes()*6) + 'deg)';
    rotatehour = 'rotate(' +(data.getHours()*30) + 'deg)';

    sec.style.transform = rotatesec;
    min.style.transform = rotatemin;
    hour.style.transform = rotatehour;

    document.querySelector(".day").innerHTML = data.getDate();
    document.querySelector(".month").innerHTML  =  dia() +", " + mes()

    document.querySelector(".hourdig").innerHTML = horas();
}


clock();

window.setInterval(clock,1000);

let theme = 0; // 0 - White , 1- Black


let button = document.querySelector("button");

function changetheme(){
        button.classList.toggle("light");
        button.classList.toggle("dark");

        document.querySelector(".hourdig").classList.toggle("dark");
        document.querySelector("body").classList.toggle("dark");
        document.querySelector(".hourpointer").classList.toggle("light");
        document.querySelector(".minpointer").classList.toggle("light");
        document.querySelector(".dot").classList.toggle("light");
        document.querySelector(".dateNhour").classList.toggle("dark");
        document.querySelector(".day").classList.toggle("light");

        if(button.innerHTML === "Dark Mode"){
            button.innerHTML = "Light Mode";
        }
        else{
            button.innerHTML = "Dark Mode";
        }
}


function dia(){
    let data = new Date()
    let diadasemana = data.getDay();
    switch(diadasemana){
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday;'
        case 6:
            return 'Saturday';
    }
}

function mes(){
    let data = new Date()
    let diadasemana = data.getMonth();
    switch(diadasemana){
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
            return 'June;'
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        case 11:
            return 'December'

    }
}

function horas(){
    let data = new Date();

    let hour = data.getHours();
    let min = data.getMinutes();
    let day = "AM"

    if(hour > 12){
        hour = hour - 12;
        day = 'PM'
    }

    if(min < 10){
        min = "0" + min;
    }

    hour = hour + ":" + min + " " + day;

    return hour;
}