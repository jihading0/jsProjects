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
    // console.log(e.target.id);
    // console.log(e.target.className);

    if (e.target.className === "delete") {
        for (let i = 0; i < main.length; i++) {

            if (main[i].id === Number(e.target.id)) {

                // delete form display
                e.target.parentElement.parentElement.remove();

                // delete from main array
                main.splice(i, 1);

                // save After Delete
                saveInLocalStorage();

            }

        }
    }
});

// update

divShow.addEventListener("click", (e) => {

    if (e.target.className === "update") {

        e.target.parentElement.parentElement.firstChild.setAttribute("contenteditable", "true");

        e.target.innerHTML = "اضافة";
        e.target.className = "add";

        e.target.parentElement.parentElement.firstChild.style = "border: 1px solid red";
        e.target.parentElement.parentElement.firstChild.focus();

    } else if (e.target.className === "add") {

        e.target.parentElement.parentElement.firstChild.setAttribute("contenteditable", "false");

        e.target.innerHTML = "تحديث";
        e.target.className = "update";

        // console.log(e.target.parentElement.parentElement.firstChild.innerHTML);
        // console.log(e.target.parentElement.parentElement.id);

        for (let i = 0; i < main.length; i++) {
            if (Number(e.target.parentElement.parentElement.id) === main[i].id) {
                // console.log("yes");
                main[i].title = e.target.parentElement.parentElement.firstChild.innerHTML;
                saveInLocalStorage();
            }
        }

        e.target.parentElement.parentElement.firstChild.style = "border: none";

    }

});

// search
function search(e) {
    if (e !== "") {

        divShow.innerHTML = `
        نتيجة البحث 
        <hr style="border: 0.1px solid;">
        `;
        for (let i = 0; i < main.length; i++) {
            if (main[i].title.includes(e)) {

                // console.log(main[i].title)
                displayFormLocalStorage(main[i].id, main[i].title);

            }
        }
    } else if (e === "") {
        divShow.innerHTML = `
        مهمات اليوم
        <hr style="border: 0.1px solid;">
        `;
        for (let i = 0; i < main.length; i++) {
            displayFormLocalStorage(main[i].id, main[i].title);
        }
    }
}


function saveInLocalStorage() {
    window.localStorage.setItem("Tasks", JSON.stringify(main));
}


//=======================
//===TEST

//===TEST
//=======================

function displayFormLocalStorage(id, title) {

    let x = document.createElement("div");
    let z = document.createElement("div");

    let buttons = document.createElement("div");
    let y = document.createElement("button");
    let u = document.createElement("button");

    let xText = document.createTextNode(`${title}`);
    let yText = document.createTextNode("حذف");
    let uText = document.createTextNode("تحديث");


    x.className = "text";
    x.setAttribute("contenteditable", "false");
    x.appendChild(xText);

    y.id = id;
    y.className = "delete";
    y.appendChild(yText);

    u.id = id;
    u.className = "update";
    u.appendChild(uText);

    // buttons.id = id;
    buttons.appendChild(u);
    buttons.appendChild(y);

    buttons.className = "container";
    buttons.style.cssText = `width: 100%;display: flex;justify-content: flex-end;gap: 5px;`;

    z.className = "container";
    z.id = id;
    z.style.cssText = `width: 100%;display: flex; justify-content: space-between;gap: 10px;`;

    z.append(x);
    z.append(buttons);

    divShow.appendChild(z);
}


// Enter To add 
document.addEventListener("keydown", (e) => {
    // console.log(e.code);
    if (e.code === "Enter" && e.code !== "") {
        addText.click();
    }
});