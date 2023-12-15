function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    timeElement.textContent = now.toLocaleTimeString();
}

// Actualizar la hora cada segundo
setInterval(updateTime, 1000);

// Mostrar la hora al cargar la página
updateTime();

const apiUrl = 'https://wttr.in/CIUDAD?format=%t+%C';

async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.text();

        const weatherInfoElement = document.getElementById('weather-info');
        weatherInfoElement.textContent = data;
    } catch (error) {
        console.error('Error al obtener datos del clima:', error);
    }
}

// Mostrar el pronóstico del clima al cargar la página
fetchWeather();
