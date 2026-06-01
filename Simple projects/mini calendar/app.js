const cont = document.querySelector(".containerOne");
const span = document.querySelector("#titleC span");

let now = new Date();

cont.innerHTML = `
    <h1>mounth Is : '${now.getMonth()+1}' [ ${now.toLocaleString('en', {month: "long"})} ]</h1>
    <h1>day Is <br> '${now.getDate()}'<br>[ ${now.toLocaleString("en" , { weekday : "long"})} ]</h1>
    <h1>year Is [ ${now.getFullYear()} ]</h1>
`;

setInterval(()=> {
    let x = new Date();
    span.textContent = x.toLocaleTimeString("en-EG");
} , 1000)