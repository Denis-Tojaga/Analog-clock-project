const stepen = 6;

const sat = document.querySelector("#hr");
const minut = document.querySelector("#min");
const sekund = document.querySelector("#sec");
const box = document.querySelector("#boxForDate");

let datum = new Date();
box.innerHTML +="<h1>" + datum.toLocaleDateString() + "</h1>";


setInterval(() => {
    let date = new Date();
    let hour = date.getHours() * 30;
    let minute = date.getMinutes() * stepen;
    let seconds = date.getSeconds() * stepen;

    
    sat.style.transform = `rotateZ(${hour+(minute/12)}deg)`;
    minut.style.transform = `rotateZ(${minute}deg)`;
    sekund.style.transform = `rotateZ(${seconds}deg)`;
})