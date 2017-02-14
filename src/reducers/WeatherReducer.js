export default function(state=[], action){
	// console.log(action);

	// if(action.type == "getWeather"){
	// 	// do this
	// }else if(action.type ==="something else"){

	// }

	switch(action.type){
	case "getWeather":
		//Do some stuff
		console.log(action.payload);
		return(action.payload);
	case "somethingElse":
		//Do some other stuff
		console.log("Shouldn't see this")
		return{pointless:"nothing to see here"}
	}

	return state;//in this case, state will be null. you can write state=null or state=[]. same thing.
}