import React from 'react';
import {Link} from 'react-router-dom';
import './DestinationInput.css'
import { connect } from 'react-redux';
import { SelectTrip, FetchTrips, FetchLogin } from '../../actions';

class GetOnYaBike extends React.Component{

  componentDidMount(){
    this.props.FetchLogin();
  }

  onClickNo = () => {
    this.props.SelectTrip(false);
  }

  onClickYes = () => {
    this.props.FetchTrips(
      this.props.login.user._id,
      this.props.weather.summary,
      this.props.weather.temperature,
      this.props.windSpeed,
      this.props.route.distance.text,
      this.props.route.duration.text,
      this.props.route.end_address
    );
    this.props.SelectTrip(true);
  }

   render(){
     return(
        <div className="container">
            <div className="box-container">
                <h2>Trip Description</h2>
                <hr/>
                <p className="text">{this.props.weather.summary}</p>
                <p className="text">Distance: {this.props.route.distance.text}</p>
                <p className="text">Duration: {this.props.route.duration.text}</p>
                <br/>
                <center><p className="text">Get on ya bike?</p></center>
                <div className="row justify-content-center">
                    <Link to="/"><button className="btn no" onClick={this.onClickNo}>No</button></Link>
                    <button className="btn yes" onClick={this.onClickYes}>Yes</button>
                </div>
            </div>
        </div>
     );
   }
};

const mapStateToProps = state => {
  return({
    route: state.directions.route,
    location: state.location,
    login: state.login,
    weather: state.weather.currently
  });
}

export default connect(mapStateToProps, { SelectTrip, FetchTrips, FetchLogin })(GetOnYaBike);
