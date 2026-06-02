const Stopwatch = document.querySelector(".Stopwatch")
const reset = document.querySelector(".reset")
const start = document.querySelector(".start")
const pause = document.querySelector(".pause")


const hours = document.querySelector(".Stopwatch .hour")
const min = document.querySelector(".Stopwatch .min")
const sec = document.querySelector(".Stopwatch .sec")
const mile = document.querySelector(".Stopwatch .mile")


reset.addEventListener("click" , resetF)
start.addEventListener("click" , startF)
pause.addEventListener("click" , pauseF)


let hour = 0, mints = 0, second = 0 , milisacond = 0;
let inver = null;


function startF() {

    if(inver) return;

    inver = setInterval(() => {
        milisacond++;
        if(milisacond > 99) {
            milisacond = 0;
            second++;
        }
        if(second > 59) {
            second = 0
            mints++;
        }
        if(mints > 59) {
            mints = 0
            hour++;
        }
        
        display();

    }, 10)
}

function resetF() {
    clearInterval(inver);
    hour = 0;
    mints = 0;
    second = 0; 
    milisacond = 0;
    inver = null;
    display()
}
function pauseF() {
    clearInterval(inver);
    inver = null;
}
function display() {
    
    mile.textContent = milisacond < 10 ? '0' + milisacond : milisacond ;
    min.textContent = mints < 10 ? '0' + mints : mints ;
    sec.textContent = second < 10 ? '0' + second : second ;
    hours.textContent = hour < 10 ? '0' + hour : hour ;

}