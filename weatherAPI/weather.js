//unneccessary city: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//zip: https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
// api key: 607df5c1d6479183f21c8f86b2fa6978

let pasteResults = function(data){
    let addResults = document.getElementById('addResults');
    let enterZip = document.getElementById('enterZip').value;
    document.getElementById('enterZip').value = '';
    let getResults = document.createElement('p');
    getResults.textContext.innerHTML = enterZip.JSON.strigify(data)
    addResults.appendChild(getResults);
}

let getWeather = function(zipCode){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + zipCode + '&units=imperial&appid=607df5c1d6479183f21c8f86b2fa6978')
    .then((res) => res.json())
    .then((data) => pasteResults(data))
    .catch((error) => console.log(`'error:' ${error}`))
}

let button = document.getElementById('button').addEventListener('click', getWeather);

getWeather(55444);


