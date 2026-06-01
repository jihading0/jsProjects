const apiKey = "93bbca04b543485bb78152614263105";

const weather = document.querySelector(".Weather"); // form

const input = document.querySelector(".Weather .inputSearch");

const tempr = document.querySelector(".tempr");
const descr = document.querySelector(".descr");
const Feel = document.querySelector(".Feel");
const Humidity = document.querySelector(".Humidity");
const Speed = document.querySelector(".Speed");

weather.addEventListener("submit" , (e) => {

    e.preventDefault();
    const city = input.value.trim();


    console.log(city)
    if(city) {
        getWeater(city);
    }
})


async function getWeater(city) {
    try {
         
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=en`;
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("المدينة غير موجودة أو حدث خطأ في الطلب");
        }

        const data = await response.json();
        console.log(data);

        tempr.textContent = `${data.current.temp_c}°C`;
        descr.textContent = `${data.current.condition.text}`;
        Feel.textContent = `Feel Like : ${data.current.feelslike_f} °C`;
        Humidity.textContent = `Humidity : ${data.current.humidity}%`;
        Speed.textContent = `Wind Speed : ${data.current.wind_kph} m/s`;


    } catch (error) {
        console.error(error.message);
    }
}   