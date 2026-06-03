// ========================= Algrothem
// [1] create "Main" array
//
// 
// 
// 
// 
// 
// 
// 

let inputText = document.querySelector("#inputText");
let addText = document.querySelector("#addText");
let divShow = document.querySelector(".show");

// let search = document.querySelector('[type="search"]');

// =================================================

// this main have objects you take from User old and new
let main = [];

// =================================================

// save [old] data in [new] main and localStorage
if (JSON.parse(localStorage.getItem("Tasks"))) {
    for (let i = 0; i < JSON.parse(localStorage.getItem("Tasks")).length; i++) {

        main.push(JSON.parse(localStorage.getItem("Tasks"))[i]);

    }
    window.localStorage.setItem("Tasks", JSON.stringify(main));
}

// show form localStorage the [old] Data


if (JSON.parse(localStorage.getItem("Tasks"))) {

    for (let i = 0; i < JSON.parse(localStorage.getItem("Tasks")).length; i++) {

        displayFormLocalStorage(main[i].id, main[i].title);

    }
}
// =================================================

// Random Number for [id]
function getRandomNum(min, max) {
    let x = Math.random() * (max - min) + min;
    x = Math.trunc(x);
    return x;
}


// Save Input in [main] => and save [main] in [localStorage]
addText.addEventListener("click", (e) => {

    let data = {
        id: getRandomNum(100000, 60000),
        title: inputText.value
    };

    if (inputText.value !== "") {

        // add to main
        main.push(data);

        // show just new data [not from LocalStorage]
        displayFormLocalStorage(data.id, data.title);

    }

    // test
    // console.log(data);
    // console.log(main);

    // save
    saveInLocalStorage();

    inputText.value = "";

});

// delete
divShow.addEventListener("click", (e) => {

    // console.log(e.target.parentElement);
    console.log(e.target.id);

    for (let i = 0; i < main.length; i++) {

        if (main[i].id === Number(e.target.id)) {

            // delete form display
            e.target.parentElement.remove();

            // delete from main array
            main.splice(i, 1);

            // save After Delete
            saveInLocalStorage();

        }
    }


});

function saveInLocalStorage() {
    window.localStorage.setItem("Tasks", JSON.stringify(main));
}


//=======================
//===TEST




//===TEST
//=======================

function displayFormLocalStorage(id, title) {

    let x = document.createElement("div");
    let y = document.createElement("button");
    let z = document.createElement("div");

    let xText = document.createTextNode(`${title}`);
    let yText = document.createTextNode("delete");

    x.className = "text";
    x.appendChild(xText);

    y.id = id;
    y.appendChild(yText);

    z.className = "container";
    z.style.cssText = `width: 100%;display: flex; justify-content: space-between;`;

    z.append(x);
    z.append(y);

    divShow.appendChild(z);
}

function search(w) {
    x = w;
    x.toLocaleLowerCase();

    divShow.innerHTML = "";

    for (let i = 0; i < main.length; i++) {

        for (let j = 0; j < main[i].title.length; j++) {

            if (x[j] === main[i].title[j]) {
                console.log(main[i].title);
                displayFormLocalStorage(main[i].id, main[i].title);
            }

        }

    }

}