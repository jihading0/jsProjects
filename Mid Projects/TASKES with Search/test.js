// let inputText = document.querySelector("#inputText");
// let addText = document.querySelector("#addText");

// let divShow = document.querySelector(".show");

// let tasksCont = [];

// let arrForDisplay = "";



// // get Data From Local storage and save in new Array
// if (window.localStorage.getItem("Taskes")) {

//     let Taskes = window.localStorage.getItem("Taskes");
//     Taskes = Taskes.split(",");


//     for (let i = 0; i < Taskes.length; i++) {
//         show(Taskes[i]);
//     }

// }


// // Save Data when Click and Display
// addText.addEventListener("click", function () {

//     // add TO ARRAY
//     if (inputText.value !== '') {
//         tasksCont.push(inputText.value);
//     }

//     console.log(`tasksCont : `);
//     console.log(tasksCont);

//     // delete after write
//     // inputText.value = '';

//     // Show TASKS
//     let box = tasksCont[tasksCont.length - 1];
//     show(box);


//     // Save To local storage



//     window.localStorage.setItem("Taskes", save);




// });


// function show(test) {

//     let x = document.createElement("div");
//     let y = document.createElement("button");

//     let z = document.createElement("div");

//     let xText = document.createTextNode(`${test}`);
//     let yText = document.createTextNode("delete");

//     x.className = "text";
//     x.appendChild(xText);

//     y.appendChild(yText);

//     z.className = "container";
//     z.style.cssText = `width: 100%;display: flex; justify-content: space-between;`;

//     z.append(x);
//     z.append(y);

//     divShow.append(z);
// }


















// NEW TRY


// let inputText = document.querySelector("#inputText");
// let addText = document.querySelector("#addText");

// let arrOfText = [];
// // let z = [];

// // let newLocalStorage = "";

// if (window.localStorage.getItem("text")) {

//     newLocalStorage = window.localStorage.getItem("text") + arrOfText.toString();

//     for (let i = 0; i < window.localStorage.getItem("text").length; i++) {

//         console.log(window.localStorage.getItem("text")[i]);

//     }
// }



// addText.addEventListener("click", () => {

//     // print TEXT of Input
//     console.log(inputText.value);

//     // Add Input Text To Aarry and Print
//     arrOfText.push(inputText.value);
//     console.log(arrOfText);

//     // save in localStorage and up date when click

//     window.localStorage.setItem("text", JSON.stringify(arrOfText));

//     // console.log(newLocalStorage);

//     // let newAndOld = newLocalStorage + arrOfText.toString();

//     // window.localStorage.setItem("text", newAndOld);

//     // console.log("New And Old : ", newAndOld);

//     // let x = newLocalStorage.split(",");
//     // let y = arrOfText.toString().split(",");

//     // let p = x.concat(y);

//     // z.push(p);

//     // console.log("New And Old Array : ", z[0]);


// });