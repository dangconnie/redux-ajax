import $ from 'jquery';
// import axios from 'axios'


const APIKEY = 'fec8b5ab27b292a68294261bb21b04a5';
const movieUrl = 'https://api.themoviedb.org/3/search/movie?api_key='+APIKEY+'&query=';

export default function GetTheMovies(movieSearchString){
	console.log("Action running", movieSearchString);
	const fullMovieUrl = movieUrl + movieSearchString;
	const thePromise = $.getJSON(fullMovieUrl);
	console.log(thePromise);

	// $.getJSON(fullWeatherUrl, (weatherData)=>{
	// 	console.log(weatherData);
	// })

	return{
		type: 'getMovies', //must have a type 
		payload: thePromise//payload is what optionally will be used to update state
	}
}