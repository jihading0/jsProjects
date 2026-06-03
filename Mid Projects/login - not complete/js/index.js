let dataUsers = [];


let LOGIN = document.getElementById('LOGIN');

let emailLogin = document.getElementById('text1');
let passwordLogin = document.getElementById('password1');


LOGIN.onclick = function (e) {
    e.preventDefault();
    for (let i = 0; i < dataUsers.length; i++) {
        if (emailLogin.value === dataUsers[i].mail && passwordLogin.value === dataUsers[i].password) {
            location.replace("done.html");
        }
        else {
            console.log("try again");
        }
    }

};



// button registration (sign in)
let signin = document.getElementById('signin');

signin.onclick = function (e) {
    e.preventDefault();
    document.forms[0].classList.replace('d-flex', 'd-none');
    document.forms[1].classList.replace('d-none', 'd-flex');
};


// registration
let SIGNUP = document.getElementById('SIGNUP');

let userName = document.getElementById('text2');
let email = document.getElementById('text22');
let password2 = document.getElementById('password2');

// let dataUsers = [];

// button sign up
SIGNUP.onclick = function (e) {

    // data user
    data();

    e.preventDefault();
    document.forms[0].classList.replace('d-none', 'd-flex');
    document.forms[1].classList.replace('d-flex', 'd-none');

};

function data() {
    let user = {
        name: userName.value,
        mail: email.value,
        password: password2.value
    };
    dataUsers.push(user);
};