const DEGREE = 6;
const hourpin = document.querySelector("#hr-pin");
const minpin = document.querySelector("#min-pin");
const secpin = document.querySelector("#seconds");
const watch = () => {
    const day = new Date();
    const hour = day.getHours() * 30;
    const min = day.getMinutes() * DEGREE;
    const sec = day.getSeconds() * DEGREE;
    hourpin.style.transform = `rotate(${(hour) + (min/12)}deg)`;
    minpin.style.transform = `rotate(${min}deg)`;
    secpin.style.transform = `rotate(${sec}deg)`;
}
watch();
setInterval(watch, 1000);