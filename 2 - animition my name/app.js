const cont = document.querySelector(".containerOne");

let names = ["shafiq","ahmed" ,"soker"];

let index = 0;
let cindex = 0;

updateText()

function updateText() {

    cindex++;

    cont.innerHTML = `<h1>Mohamed hassan ${names[index].slice(0,cindex)}</h1>`

    if(cindex === names[index].length){
        index++;
        cindex = 0;
    }

    if (index === names.length) {
        index = 0;
    }
        
    setTimeout(updateText,500);

}