let bookMark = document.querySelector('#bookMark');
let webUrl = document.querySelector('#webUrl');
let btnSubmit = document.querySelector('#btnSubmit');
let resault = document.querySelector('#resault');

let container = [];

if (localStorage.getItem('WebSites') != null) {
    container = JSON.parse(localStorage.getItem('WebSites'));
    show();
}

btnSubmit.onclick = function () {

    if (bookMark.value === "" || webUrl.value === "") {

    } else {
        let contain = {
            name: bookMark.value,
            url: webUrl.value
        };

        container.push(contain);
        localStorage.setItem('WebSites', JSON.stringify(container));

        show();
        clear();
    }



};
function show() {
    let box = ``;
    for (let i = 0; i < container.length; i++) {
        box += `
        <div id="" class="form-control bg-black text-white rounded-0 p-2 mt-2 d-flex justify-content-between align-items-center">
            <span class="fs-5">${container[i].name}</span>
            <div>
                <a class="btn btn-sm btn-outline-light rounded-0" href="https://www.${container[i].url}" target="_blank">Vist</a>
                <button onclick="deletIt(${i})" class="btn btn-sm btn-outline-danger rounded-0">Delet</button>
            </div>
        </div>
    `;
    }
    resault.innerHTML = box;
}
function deletIt(e) {
    container.splice(e, 1);
    localStorage.setItem('WebSites', JSON.stringify(container));
    show();
}
function clear() {
    bookMark.value = "";
    webUrl.value = "";
}













