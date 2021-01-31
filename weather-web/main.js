const tempText = document.querySelector(".temp");
const minTempText = document.querySelector(".min-temp");
const maxTempText = document.querySelector(".max-temp");
const descriptionText = document.querySelector(".description");
const iconTag = document.querySelector(".icon");

async function getWeatherData(lat, lon){
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2bb4d7864e57694acbe21989fe494cba&lang=ko-KR&units=metric`);
    const result = await data.json();
    console.log(result)
    const {main: {temp, temp_max, temp_min}, weather: [weather]} = result;
    const {main, icon} = weather;
    tempText.innerText = temp;
    minTempText.innerText = temp_min;
    maxTempText.innerText = temp_max;
    descriptionText.innerText = main;
    iconTag.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

function getWeather(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(pos => {
            let lon = pos.coords.longitude;
            let lat = pos.coords.latitude;
            getWeatherData(lat, lon);
        });
    }
}

getWeather();

