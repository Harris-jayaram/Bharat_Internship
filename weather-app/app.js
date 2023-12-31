function getWeather() {
    const locationInput = document.getElementById('location');
    const location = locationInput.value;

    if (location.trim() === '') {
        alert('Please enter a valid location.');
        return;
    }

    const apiKey = 'f77ddee94cf0e208c48fe7daffb66671'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`; // Units set to metric for Celsius

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherInfoContainer = document.getElementById('weather-info');
    weatherInfoContainer.innerHTML = '';

    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    const weatherInfo = `
        <h3>${cityName}</h3>
        <p>Temperature: ${temperature} &deg;C</p>
        <p>Description: ${description}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
    `;

    weatherInfoContainer.innerHTML = weatherInfo;
}
