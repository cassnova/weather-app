function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=efd39920b52d32ac77d992bcbc1f9852`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerHTML = `Weather in ${name}`;
      document.querySelector(
        ".icon"
      ).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      document.querySelector(".description").innerHTML = description;
      document.querySelector(".temp").innerHTML = `${temp}°C`;
      document.querySelector(".humidity").innerHTML = `Humidity: ${humidity}%`;
      document.querySelector(".wind").innerHTML = `Wind speed: ${speed} km/h`;
    })
    .catch((err) => {
      console.error(err);
    });
}

document.querySelector(".btn").addEventListener("click", () => {
  fetchWeather(document.querySelector(".search__bar").value);
});
