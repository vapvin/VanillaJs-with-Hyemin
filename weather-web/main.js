const tempText = document.querySelector(".temp");
const minTempText = document.querySelector(".min-temp");
const maxTempText = document.querySelector(".max-temp");
const descriptionText = document.querySelector(".description");
const iconTag = document.querySelector(".icon");

let lon;
let lat;

async function getWeather(lat, lon){
    console.log(lon, lat)
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2bb4d7864e57694acbe21989fe494cba&lang=ko-KR&units=metric`);
    const result = await data.json();
    const {main: {temp, temp_max, temp_min}, weather: [weather]} = result;
    const {main, icon} = weather;
    console.log(temp, temp_max, temp_min, main, icon)
    tempText.innerText = temp;
    minTempText.innerText = temp_min;
    maxTempText.innerText = temp_max;
    descriptionText.innerText = main;
    iconTag.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(pos => {
            lon = pos.coords.longitude;
            lat = pos.coords.latitude;
            console.log(lon, lat)
            getWeather(lat, lon);
        });
    }
}
getLocation();
