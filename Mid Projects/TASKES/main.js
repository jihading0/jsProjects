let inputText = document.querySelector("#inputText");
let addText = document.querySelector("#addText");
let divShow = document.querySelector(".show");

// =================================================

// this main have objects you take from User old and new

let main = [];

// =================================================



// save old data in new localStorage

if (JSON.parse(localStorage.getItem("Tasks"))) {
    for (let i = 0; i < JSON.parse(localStorage.getItem("Tasks")).length; i++) {

        main.push(JSON.parse(localStorage.getItem("Tasks"))[i]);

    }
    window.localStorage.setItem("Tasks", JSON.stringify(main));
}

// show form localStorage the old Data

if (JSON.parse(localStorage.getItem("Tasks"))) {

    for (let i = 0; i < JSON.parse(localStorage.getItem("Tasks")).length; i++) {

        displayFormLocalStorage(main[i].id, main[i].title);

    }
}

// =================================================


function getRandomNum(min, max) {
    let x = Math.random() * (max - min) + min;
    x = Math.trunc(x);
    return x;
}

addText.addEventListener("click", (e) => {

    let data = {
        id: getRandomNum(100000, 60000),
        title: inputText.value
    };

    if (inputText.value !== "") {

        // add to main
        main.push(data);

        // show just new data not from LocalStorage
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


// let x =
//     [{ id: 72213, title: "1" },
//     { id: 85310, title: "2" },
//     { id: 69231, title: "3" },
//     { id: 88829, title: "4" }];


// console.log(x.splice(1,1));
// console.log(x[0]);

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