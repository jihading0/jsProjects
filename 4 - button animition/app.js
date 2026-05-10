const btn = document.querySelector(".containerOne button");

btn.addEventListener("mousemove" , (e)=>{
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    console.log(x ,y)

    btn.style.setProperty("--xPos", x + "px");
    btn.style.setProperty("--yPos", y + "px");
})


// مثال بمساعدة ال ai
