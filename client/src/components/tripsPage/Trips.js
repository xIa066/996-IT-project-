import React from 'react';
import { connect } from 'react-redux';
import { FetchTrips } from '../../actions';
import axios from 'axios';

class Trips extends React.Component {

  onSubmit = () =>{
    
    const temperature = this.props.currentWeather.temperature;
    const summary = this.props.currentWeather.summary;
    const windSpeed = this.props.currentWeather.windSpeed;
    const location_desc = this.props.parking.location_desc;
    this.props.FetchTrips(temperature, summary, windSpeed, location_desc);
  }

  render(){

    return(
      <div className="box-container">
        <h2>List of all trips</h2>
        <hr/>
        <button className="btn btn-success mb-3" onClick={this.onSubmit}>Load trip history</button>

        {this.props.currentTrips && this.props.currentTrips.map((item, i) => {
                return (
                  <p key={item._id}> Trip #{i}: {item.summary}, {item.temperature} °C, {item.windSpeed} knots, {item.location_desc}  </p>
                );
              })}

        {/* {this.props.currentWeather.summary && <p>Weather Summary: {this.props.currentWeather.summary}</p>}
        {this.props.currentWeather.windSpeed && <p>Wind Speed: {this.props.currentWeather.windSpeed} knots</p>}
        {this.props.currentWeather.temperature && <p>Temperature: {this.props.currentWeather.temperature}</p>}
        {this.props.parking.location_desc && <p>Parking Location: {this.props.parking.location_desc}</p>} */}
      </div>
    );
  }
}

const mapStateToProps = state => {

  return ({
    currentTrips: state.trips,
    parking: state.parking,
    currentWeather: state.weather,
    directions: state.directions,
    location: state.location,
  });

}

export default connect(
  mapStateToProps,
  { FetchTrips }
)(Trips);
