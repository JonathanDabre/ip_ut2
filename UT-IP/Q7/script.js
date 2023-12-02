const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const cityName = document.getElementById('city-name');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const conditions = document.getElementById('conditions');

searchButton.addEventListener('click', fetchWeather);

async function fetchWeather() {
    const city = cityInput.value;

    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    // Simulated sample JSON data
    const sampleData = {
        name: "Mumbai",
        main: {
            temp: 25,
            humidity: 60
        },
        wind: {
            speed: 3.5
        },
        weather: [
            {
                description: "Clear",
            }
        ]
    };

    cityName.textContent = sampleData.name;
    temperature.textContent = sampleData.main.temp;
    humidity.textContent = sampleData.main.humidity;
    windSpeed.textContent = sampleData.wind.speed;
    conditions.textContent = sampleData.weather[0].description;
}
