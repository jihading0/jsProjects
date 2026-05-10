const container = document.querySelector(".container div");
const btn = document.querySelector(".container button");
const btnAdd = document.querySelector(".container .add");


btn.addEventListener("click", () => {
    location.reload();
})


function addNew() {
    
    let imgs = document.createElement("img");
    imgs.src = `...${Math.floor(Math.random() * 100)}`;

    container.append(imgs);

}

btnAdd.addEventListener("click", () => {
        addNew();    
})
