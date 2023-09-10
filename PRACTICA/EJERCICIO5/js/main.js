const apiKey = '';
const city = 'Buenos Aires';

async function getWeather(){
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  document.getElementById('temperature').textContent = data.main.temp;
  document.getElementById('description').textContent = data.weather[0].description;
}

