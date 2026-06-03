// 1 - get total
// 2 - create proudcut 
// 3 - save in locale storage
// 4 - clear inputs
// 5 - read =>>>
// 6 - count
// 7 - delete
// 8 - update
// 9 - search
// 10 - clean data

let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let category = document.getElementById('category');
let count = document.getElementById('count');
let submit = document.getElementById('submit');

let mood = 'create';
let tmp;

function getTotal() {
    if (price.value != '') {
        let result = (Number(price.value) + Number(taxes.value) + Number(ads.value)) - +discount.value
        total.innerHTML = result;
    }
    else {
        total.innerHTML = '';
    }
}

let datePro;

if (localStorage.Product != null) {
    datePro = JSON.parse(localStorage.Product);
}
else {
    datePro = [];
}

submit.onclick = function () {
    let newPro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value
    }

    if (mood === 'create') {
        if (newPro.count > 1) {
            for (let i = 0; i < newPro.count; i++) {
                datePro.push(newPro);
            }
        } else {
            datePro.push(newPro);
        }
    }
    else {
        datePro[tmp] = newPro;
        mood = 'create'
        submit.innerHTML = 'create'
        count.style.display = 'block';
    }

    localStorage.setItem('Product', JSON.stringify(datePro));

    // console.log(datePro);
    clear();
    showData();

};

//clear
function clear() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
};


function showData() {

    let table = '';

    for (let i = 0; i < datePro.length; i++) {
        table += `
        <tr>
        <td>${i}</td>
        <td>${datePro[i].title}</td>
        <td>${datePro[i].price}</td>
        <td>${datePro[i].taxes}</td>
        <td>${datePro[i].ads}</td>
        <td>${datePro[i].discount}</td>
        <td>${datePro[i].total}</td>
        <td>${datePro[i].category}</td>
        <td> <button id="update" onclick="updateData(${i})" class="btn btn-outline-light">update</button></td>
        <td> <button id="delete" onclick="deleteData(${i})" class="btn btn-outline-danger">delete</button></td>
        </tr>   
        `
    }

    document.getElementById('tbody').innerHTML = table;

    let deletAllBtn = document.getElementById('deletAllBtn');

    if (datePro.length > 0) {
        deletAllBtn.innerHTML = `
    <button id="deleteAll" onclick="deletAll()" class="btn btn-outline-danger w-100 mb-2">Delete All (${datePro.length})</button>
    `
    }
    else {
        deletAllBtn.innerHTML = '';
    }
}
showData();



function deleteData(i) {
    datePro.splice(i, 1);
    localStorage.Product = JSON.stringify(datePro);
    showData();
}

function deleteData(i) {
    datePro.splice(i, 1);
    localStorage.Product = JSON.stringify(datePro);
    showData();
}


function deletAll() {
    localStorage.clear();
    datePro.splice(0);
    showData();
}


function updateData(i) {
    title.value = datePro[i].title;
    price.value = datePro[i].price;
    taxes.value = datePro[i].taxes;
    ads.value = datePro[i].ads;
    discount.value = datePro[i].discount;
    getTotal();
    count.style.display = 'none';
    category.value = datePro[i].category;
    mood = 'update';
    tmp = i;
    scroll({
        top: 0
    })
}