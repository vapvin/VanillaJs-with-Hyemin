let lon;
let lat;

async function getWeather(lat, lon){
    console.log(lon, lat)
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2bb4d7864e57694acbe21989fe494cba&lang=ko-KR`);
    const result = await data.json();
    console.log(result);
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
