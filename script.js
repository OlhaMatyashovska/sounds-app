const city = document.querySelector(".cityName");
const temperature = document.querySelector(".weather-temperature");
const weatherAppearance = document.querySelector(".weather-appearance");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&lang=en&appid=dfc87a4a92442d462908d2283653f551&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = (data.main.temp).toFixed(0) + "°C";
    weatherAppearance.textContent = data.weather[0].description;
}
// document.addEventListener("DOMContentLoaded",getWeather);
window.addEventListener('beforeunload', () => {
    localStorage.setItem('cityName', city);
  })
window.addEventListener('beforeunload', () => {
    if(localStorage.getItem('cityName')) {
      const city = localStorage.getItem('radioTool');
      getWeather(city);
    }
  })
// city.addEventListener("keypress",getWeather);