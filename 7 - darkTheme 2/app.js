const btn = document.querySelector("#theme-btn");

const save = localStorage.getItem("theme");
if(save === 'on'){
     document.body.classList.add("dark-mode") 
}

btn.addEventListener("click" , () => {

    const change = document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", (change)? 'on' : 'off' )

})