const genbtn = document.querySelector(".genbtn");
const output = document.querySelector(".output");
const copyBtn = document.querySelector(".copy-icon");
const popUp = document.querySelector(".alert");





genbtn.addEventListener("click" , () => {
    output.value = createPassword();
});

copyBtn.addEventListener("click" , () => {
    
    if(output.value === ""){
        alertpopUp();
        popUp.classList.add("text-bg-danger")
        popUp.innerHTML = "Generate pass First!";
        return;
    } else {
        popUp.classList.remove("text-bg-danger")
        popUp.innerHTML = "Password is copyed";
    }
        
    copyPassword();
    
})

function createPassword() {
    
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const passLen = 15;

    let password = "";
    for(let i = 0; i < passLen ; i++) {
        const randomeIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomeIndex];
    }

    return password;

}

function copyPassword() {
    navigator.clipboard.writeText(output.value).then(() => {
        alertpopUp();
    })
};

function alertpopUp() {
    popUp.classList.remove('active');
    setTimeout(() => { popUp.classList.add('active') }, 1000);
};