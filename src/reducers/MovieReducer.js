export default function(state=[], action){
	console.log(action.type);
	switch(action.type){
		case 'getMovies':
		console.log("I am needed!");
		return action.payload;
	}
	return state;
}