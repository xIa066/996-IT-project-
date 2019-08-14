import React from 'react';
import { connect } from 'react-redux';
import { FetchWeather } from '../../actions';

class WeatherSidebar extends React.Component {

  onSubmit = () =>{
    const lat = "144.9612";
    const lng = "37.7964";
    this.props.FetchWeather(lat, lng);
  }

  render(){
    return(
      <div className="box-container">
      <h2>Current Weather</h2>
      <hr/>
      {this.props.weather.summary && <p className="text">{this.props.weather.summary}</p>}
      {this.props.weather.temperature && <p className="text">Temparature: {this.props.weather.temperature}°C</p>}
      {this.props.weather.humidity && <p className="text">Humidity: {this.props.weather.humidity}</p>}
      {this.props.weather.windSpeed && <p className="text">Wind Speed: {this.props.weather.windSpeed}kn/s</p>}
      <center><button className="btn yes" onClick={this.onSubmit}>Refresh Weather</button></center>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return { weather: state.weather };
}

export default connect(
  mapStateToProps,
  { FetchWeather }
)(WeatherSidebar);
