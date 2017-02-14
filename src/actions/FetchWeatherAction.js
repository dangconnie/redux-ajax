import $ from 'jquery';
// import axios from 'axios'

const APIKEY = '482c145ce8edf1d69ea5168f9d06460c';
const weatherUrl = 'http: api.openweathermap.org/data/2.5/weather?units=imperial&appid=' + APIKEY + '&zip=';

export default function GetTheWeather(zipCode){
	console.log("Action running", zipCode);
	const fullWeatherUrl = weatherUrl + zipCode
	const thePromise = $.getJSON(fullWeatherUrl);
	console.log(thePromise);

	// $.getJSON(fullWeatherUrl, (weatherData)=>{
	// 	console.log(weatherData);
	// })

	return{
		type: 'getWeather', //must have a type 
		payload: thePromise//payload is what optionally will be used to update state
	}
}