const My_Key = `0d56fb52022a7b44ed8c13c3cda1f498`;

const loadWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${My_Key}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  displayWeatherData(data);
};

const displayWeatherData = (data) => {
  const temperature = document.getElementById("temperature");
  temperature.innerText = data.main.temp;
};

document.getElementById("btn-search").addEventListener("click", function () {
  const searchfield = document.getElementById("search-field");
  const city = searchfield.value;
  document.getElementById("city").innerText = city;

  loadWeatherData(city);
});

loadWeatherData("dhaka");
