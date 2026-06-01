const bodyEl = document.querySelector(".containerOne");

bodyEl.addEventListener("mousemove", (e) => {
    
    let xPos = e.offsetX; 
    let yPos = e.offsetY;
    
    const span = document.createElement("span");
    const ran = Math.random()*5;

    span.style = `width:${ran}px;height:${ran}px;left:${xPos}px;top:${yPos}px;`;

    bodyEl.append(span);

    setTimeout(() => {
        span.remove();
    }, 1000)
})