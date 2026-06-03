let inputText = document.querySelector("#inputText");
let addText = document.querySelector("#addText");

let divShow = document.querySelector(".show");

let arrOfText = [];
let forDisplay = "";
let newAndOld = "";

let newLocalStorage = "";

if (window.localStorage.getItem("text")) {

    newLocalStorage = window.localStorage.getItem("text") + arrOfText.toString();

    console.log("getItem : ", window.localStorage.getItem("text"));
}




addText.addEventListener("click", () => {

    // print TEXT of Input
    console.log(inputText.value);


    // Add Input Text To Aarry and Print

    arrOfText.push((inputText.value + "-"));
    console.log(arrOfText);



    // save in localStorage and up date when click
    window.localStorage.setItem("text", arrOfText);

    console.log(newLocalStorage);

    // old data + new data 
    newAndOld = newLocalStorage + arrOfText.toString();

    window.localStorage.setItem("text", newAndOld);

    console.log("New And Old : ", newAndOld);

    // Show Data
    show(inputText.value);

    // Clear input
    inputText.value = "";
});

// convert STRING data Form GetItem TO Array
forDisplay = window.localStorage.getItem("text")
    .split("-").toString().split(",").filter((e) => { return e !== ""; });

console.log("LAST : ", forDisplay);


// old Data when reload
for (let i = 0; i < forDisplay.length; i++) {
    show(forDisplay[i]);
}


function show(texted) {

    let x = document.createElement("div");
    let y = document.createElement("button");

    let z = document.createElement("div");

    let xText = document.createTextNode(`${texted}`);
    let yText = document.createTextNode("delete");

    x.className = "text";
    x.appendChild(xText);

    y.appendChild(yText);

    z.className = "container";
    z.style.cssText = `width: 100%;display: flex; justify-content: space-between;`;

    z.append(x);
    z.append(y);

    divShow.append(z);

}

let deleter = document.querySelectorAll(".show .container");

console.log(deleter);

// Add Class Name for divs
for (let i = 0; i < deleter.length; i++) {
    deleter[i].className = forDisplay[i];
}

deleter.forEach((div, i) => {

    div.addEventListener("click", (e) => {

        // المكان ال دوست فيه
        console.log(e.currentTarget.className);

        // remove Element FROM :
        // [1] page => done
        // [2] from display Arr
        // [3] from local Storage
        deleter[i].remove();

        console.log(newLocalStorage);


        // // add TO LOCALSTORAGE
        // window.localStorage.setItem("color", e.currentTarget.dataset.color);
        // show.style.backgroundColor = e.currentTarget.dataset.color;
    });
});



// ======
// TEST
// ======

let x = [1, 2, 3, "Mm", 5, 6];


z = x.splice(x.indexOf("Mm"), 1);


console.log("X TEST : ", x);

// TEST

// var names = [];
// names[0] = prompt("New member name?");
// localStorage.setItem("names", JSON.stringify(names));

// //...
// var storedNames = JSON.parse(localStorage.getItem("names"));

// localStorage.names = JSON.stringify(names);
// var storedNames = JSON.parse(localStorage.names);


let obj = {
    id: 2,
    title: "ss"
};
let arr = [obj, obj];
console.log(obj);
console.log(arr);