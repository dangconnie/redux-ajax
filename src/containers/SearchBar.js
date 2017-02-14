import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FetchWeather from '../actions/FetchWeatherAction';
import FetchMovie from '../actions/FetchMovieAction';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      zipCode: '',
      movieSearch: ''
    }
    this.changeZipCode=this.changeZipCode.bind(this);
    this.getWeather=this.getWeather.bind(this);
    this.getMovie=this.getMovie.bind(this);
    this.changeMovie=this.changeMovie.bind(this);

  }
  getMovie(event){
    event.preventDefault()
    this.props.FetchMovie(this.state.movieSearch)
  }

  getWeather(event){
    event.preventDefault()
    // console.log(this.state.zipCode);
    this.props.FetchWeather(this.state.zipCode);
  }

  changeMovie(event){
    this.setState({
      movieSearch: event.target.value
    })
  }

  changeZipCode(event){
    this.setState({
      zipCode: event.target.value//every time input box is changed, state is updated
    });
  }

  render() {
    console.log(this.props)
    if(this.props.weatherData == null){
      var weatherData = "";
    }else{
      var weatherData = this.props.weatherData.name;
    }
    if(this.props.movieData == null){
      var movieData = "";
    }else{
      var movieData = this.props.movieData.poster_path;
    }
    return (
      <div>
        <form onSubmit={this.getWeather}>
          <input placeholder="Enter zip code" value={this.state.zipCode} onChange={this.changeZipCode}/>
          <button type="submit" className="btn btn-primary">Get the weather</button>
        </form>
        {weatherData}
         <form onSubmit={this.getMovie}>
          <input placeholder="Enter movie name" value={this.state.movieSearch} onChange={this.changeMovie}/>
          <button type="submit" className="btn btn-primary">Get the movies!</button>
        </form>
        {movieData}
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    weatherData: state.weather
  }
}

function mapDispatchToProps(dispatch){
  //Get data. this is an action
  return bindActionCreators({
    FetchWeather: FetchWeather,
    FetchMovie: FetchMovie
  }, dispatch);
}

// export default connect(null, mapDispatchToProps)(SearchBar);
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
//no state to pass yet, so "null"
//will connect the props of this component to the searchBar

