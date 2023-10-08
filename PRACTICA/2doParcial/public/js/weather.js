// Define las coordenadas y la clave de la API
let lat = "15.";
let lon = " -90.478180";
let api_key = "76667b86d804e23e77d895184eb4c374";

// Construye la URL de la API
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;

// Realiza la solicitud a la API
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Selecciona el elemento div con id 'weather'
    let weatherDiv = document.getElementById("weather");

    // Verifica que la respuesta contenga datos
    if (data.weather && Array.isArray(data.weather)) {
      // Crea y añade contenido al div
      let content = `
            <h2>${data.name}</h2>
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp}K</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
      weatherDiv.innerHTML = content;
    }
  })
  .catch((error) => console.error("Error:", error));
