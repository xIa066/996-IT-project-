import React from 'react';
import { connect } from 'react-redux';
import { FetchLogin, FetchTrips } from '../../actions';
import axios from 'axios';

class Trips extends React.Component {

  componentDidMount(){
    //const temperature = this.props.currentWeather.temperature;
    //const summary = this.props.currentWeather.summary;
    //const windSpeed = this.props.currentWeather.windSpeed;
    //const location_desc = this.props.parking.location_desc;
    this.props.FetchLogin();
  }

  render(){
    var signUpIn ="LOGIN / SIGN UP"
    var signUpInRoute = "/auth/google"
    var userData = this.props.LoginStatus.user;
    if(this.props.LoginStatus.success){
      signUpIn = "LOGOUT"
      signUpInRoute = "/auth/logout"
      return(
        <div className="box-container">
          <h2>Past Trips:</h2>
          <hr/>
          <div className="table-responsive">
          <table className="table response">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Trip No.</th>
              <th>Weather</th>
              <th>Temp.</th>
              <th>Wind</th>
              <th>Distance</th>
              <th>Duration</th>
              <th>Destination</th>
            </tr>
          </thead>
          <tbody>
            {userData.trips.map((value, index) => {
              return(
                <tr key={value._id}>
                  <th scope="row" >#{index} </th>
                  <td> {value.Summary} </td>
                  <td> {value.Temperature} °C </td>
                  <td> {value.WindSpeed} knots </td>
                  <td> {value.Distance} </td>
                  <td> {value.Duration} </td>
                  <td> {value.Destination} </td>
                </tr>
              )
          })}
          </tbody>
          </table>
          </div>
          {/* {this.props.currentWeather.summary && <p>Weather Summary: {this.props.currentWeather.summary}</p>}
          {this.props.currentWeather.windSpeed && <p>Wind Speed: {this.props.currentWeather.windSpeed} knots</p>}
          {this.props.currentWeather.temperature && <p>Temperature: {this.props.currentWeather.temperature}</p>}
          {this.props.parking.location_desc && <p>Parking Location: {this.props.parking.location_desc}</p>} */}
        </div>
      );
    }
    else{
      signUpIn = "LOGIN / SIGN UP"
      signUpInRoute = "/auth/google"
      return(
        <div className="box-container">
        <h3>Log in to access your profile!</h3><hr />
          <a href={signUpInRoute}><button className="btn no"> {signUpIn  } </button></a>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {

  return ({
    LoginStatus: state.login,
    weather: state.weather,
    routeSteps: state.directions.route,
  });

}

export default connect(
  mapStateToProps,
  { FetchLogin, FetchTrips }
)(Trips);
