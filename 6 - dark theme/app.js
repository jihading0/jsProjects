const container = document.querySelector(".container ");
const div = document.querySelector(".container div");
const btn = document.querySelector(".container div button");


const save = localStorage.getItem("theme");

if(save === `on`) {
    div.classList.add('active')
    container.classList.add('active')
}

div.addEventListener("click", (e) => {

    if(!div.classList.contains('active')){
        div.classList.add('active')
        container.classList.add('active')
        localStorage.setItem("theme" , 'on')

    }else {
        div.classList.remove('active')
        container.classList.remove('active')
        localStorage.setItem("theme" , 'off')
    }

})

// اقتراح ال ai
div.addEventListener("click", () => {
    
    const isActive = div.classList.toggle('active'); 
    
    container.classList.toggle('active', isActive);
    
    localStorage.setItem("theme", isActive ? "on" : "off");

});










// هذا مع ال ai 
// const loc = window.localStorage.getItem("theme")

// if (loc === "on") {
//     div.classList.add("active");
//     container.classList.add('active');
// }

// div.addEventListener("click" , (e) => {

//     div.classList.toggle('active');

//     if (div.classList.contains('active')) {

//         container.classList.add('active'); 
//         localStorage.setItem("theme", "on"); 

//     } else {
//         container.classList.remove('active'); 
//         localStorage.setItem("theme", "off");
//     }
// })