//unneccessary city: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//zip: https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
// api key: 607df5c1d6479183f21c8f86b2fa6978


let currentDate = document.getElementById('currentDate');
let city = document.getElementById('city');
let currentTemp = document.getElementById('currentTemp');
let currentCond = document.getElementById('currentCond');
let tempHiLow = document.getElementById('tempHiLow');

let pasteResults = async function (data) {
    let currDate = new Date(data.dt*1000)
    currentDate.innerHTML = `Current Date: ${currDate.toLocaleString()}`;
    city.innerHTML = `City Name: ${data.name}`;
    currentTemp.innerHTML = `Current Temp: ${data.main.temp}`;
    currentCond.innerHTML = `Current Conditions: ${data.weather[0].description}`;
    tempHiLow.innerHTML = `Temperature Low: ${data.main.temp_min} High: ${data.main.temp_max}`;

}

let getWeather = async function (zipCode) {
    try {
        let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + zipCode + ',US&units=imperial&appid=607df5c1d6479183f21c8f86b2fa6978');
        let data = await response.json();
        pasteResults(data);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

let button = document.getElementById('button');
button.addEventListener('click', () => {
    let zipCode = document.getElementById('enterZip').value;
    getWeather(zipCode);
});




