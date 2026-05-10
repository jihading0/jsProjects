const container = document.querySelector(".container div");
const btn = document.querySelector(".container button");
const btnAdd = document.querySelector(".container .add");


btn.addEventListener("click", () => {
    location.reload();
})


function addNew() {
    
    let imgs = document.createElement("img");
    imgs.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 100)}`;

    container.append(imgs);

}

btnAdd.addEventListener("click", () => {
    for(let i = 0; i < 10 ; i++) {
        addNew();
    }
})
