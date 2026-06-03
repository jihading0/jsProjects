let lis = document.querySelectorAll("ul li");
let show = document.querySelector(".showColor div");

// window.localStorage.clear();

if (window.localStorage.getItem("color")) {
    // [1] add COLOR TO DIV
    show.style.backgroundColor = window.localStorage.getItem("color");

    // [2] remove COLOR from select
    lis.forEach((li) => {
        li.classList.remove("active");
    });

    // [3] color

    document.querySelector(`[data-color = ${window.localStorage.getItem("color")}]`)
        .classList.add("active");


} else {
    console.log("no");
}


lis.forEach((li) => {
    li.addEventListener("click", (e) => {

        // المكان ال دوست فيه
        console.log(e.currentTarget.dataset.color);

        // remove ACTIVE
        lis.forEach((li) => {
            li.classList.remove("active");
        });

        // add ACTIVE
        e.currentTarget.classList = "active";

        // add TO LOCALSTORAGE
        window.localStorage.setItem("color", e.currentTarget.dataset.color);


        show.style.backgroundColor = e.currentTarget.dataset.color;

    });
});




if (window.sessionStorage.getItem("name-input")) {
    document.querySelector(".name").value = window.sessionStorage.getItem("name-input");
}


document.querySelector(".name").onblur = function () {
    console.log(this.value);
    window.sessionStorage.setItem("name-input", this.value);
};