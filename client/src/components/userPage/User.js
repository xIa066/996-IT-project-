import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { FetchLogin, FetchTrips, FetchWeather, FetchDirections } from '../../actions';
import './user.css'
//import { FetchTrips } from '../../actions';

class User extends React.Component {

  componentDidMount() {
    this.props.FetchLogin();
  }
  onSubmit = () => {
    console.log(this.props.routeSteps);
    this.props.FetchTrips(
      this.props.LoginStatus.user._id,
      this.props.weather.summary,
      this.props.weather.temperature,
      this.props.weather.windSpeed,
      this.props.routeSteps.distance.text,
      this.props.routeSteps.duration.text,
      this.props.routeSteps.end_address
    );
  }
  render() {
    var signUpIn ="LOGIN / SIGN UP"
    var signUpInRoute = "/auth/google"
    if(this.props.LoginStatus.success){
      signUpIn = "LOGOUT"
      signUpInRoute = "/auth/logout"
      return(
        <div>
          <center>
            <div>
            <img className="user-icon" src={this.props.LoginStatus.user.thumbnail} width="150px" alt="userprofile"/>
            </div>
            <button onClick={this.onSubmit}>Click to add to database</button><br />
            <span className="username">{this.props.LoginStatus.user.username}</span>
          </center>
          <br/>
          <div className="box-container">
            <h3 className="text">Preferences</h3>
            <hr />
            <p className="text">
             Lowest temp:<br />
             Highest temp: <br/>
             Max WindSpeed: <br/>
            </p>
            <Link to="/users/preferences"><button className="btn btn-primary">Set your preferences!</button></Link>
          </div>
        </div>
      );
    }
    else{
      signUpIn = "LOGIN / SIGN UP"
      signUpInRoute = "/auth/google"
      return(
        <div>
        </div>
      );
    }
  }
}

//const mapStateToProps = state => {
//  return { currentTrips: state.weather };
//}

const mapStateToProps = state => {
  return {
    LoginStatus: state.login,
    weather: state.weather,
    routeSteps: state.directions.route,
   };
};

export default connect(
  mapStateToProps,
  { FetchLogin, FetchTrips, FetchWeather, FetchDirections }
)(User);
