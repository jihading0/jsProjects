const hours = document.querySelector(".hours span")
const minutes = document.querySelector(".minutes span")
const seconds = document.querySelector(".seconds span")

setInterval(() => {

    const data = new Date();

    hours.textContent = data.getHours() % 12;
    minutes.textContent = data.getMinutes();
    seconds.textContent = data.getSeconds();

}, 1000)