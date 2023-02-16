const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '81746daf58mshf2caf55b57c8ae1p10e40djsn5415386ddee2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		cityname.innerHTML=city

		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather(city.value)
})

getweather("Delhi")

function shanghai() {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
	.then(response => response.json())
	.then((response) => {
		

		console.log(response)
		cloud_pct2.innerHTML = response.cloud_pct
		temp2.innerHTML = response.temp
		feels_like2.innerHTML = response.feels_like
		humidity2.innerHTML = response.humidity
		min_temp2.innerHTML = response.min_temp
		max_temp2.innerHTML = response.max_temp
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees2.innerHTML = response.wind_degrees
		sunrise2.innerHTML = response.sunrise
		sunset2.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}

	


