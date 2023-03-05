const My_Key = `0d56fb52022a7b44ed8c13c3cda1f498`;

const loadWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${My_Key}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
};

loadWeatherData("dhaka");
