// SELECTORS

const btn = document.querySelector("button");
const details = document.querySelector(".details");
const name = document.querySelector(".name");
const desc = document.querySelector(".desc");
const tempC = document.querySelector(".temp");
const iconHolder = document.querySelector(".icon");

const api = "e26039bd4e13555fdd660e60f6be1591";
const input = document.querySelector("#query");

// EVENT LISTENERS

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const query = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    query
  )}&appid=${api}&units=metric`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const temp = data.main.temp;
      const place = data.name;
      const icon = data.weather[0].icon;
      const speed = data.wind.speed;
      const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      tempC.textContent = `${temp}°C`;
      name.textContent = `${place}`;
      desc.textContent = `${speed}`;
      iconHolder.src = iconUrl;
      details.style.visibility = "visible";
    })
    .catch((err) => alert("Enter valid location"));
  input.value = "";
});
