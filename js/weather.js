const API_KEY = 'a16833eed8f4ff112922d3ca7657f990';

function onGeoSuccess(position) {
	const lat = position.coords.latitude;
	const long = position.coords.longitude;

	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;

	fetch(url)
		.then((res) => res.json())
		.then(data => {
      const weather = document.querySelector('#weather span:first-child')
      const city = document.querySelector('#weather span:last-child')
      
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = `${data.name}, ${data.sys.country}`;
    });
}

function onGeoError() {
	alert("Can't find you. No weather for you ☹️");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
