const tech = document.querySelector(".tech");

const arr = ['html' , 'css' , 'js' , 'bootstrap', 'git' , 'github'];

let charArr = 0;
let carerIndex = 0;

update();

function update() {

    tech.innerHTML = 
    `<span class="text-bg-danger px-2 rounded-2">${arr[carerIndex].slice(0,charArr)}</span>`;

    charArr++;
    
    if(charArr === arr[carerIndex].length + 1 ){
        carerIndex++;
        charArr = 0;
    }
    if(arr.length === carerIndex){
        carerIndex = 0;
    }

    setTimeout(update , 400);

    return 0;
}