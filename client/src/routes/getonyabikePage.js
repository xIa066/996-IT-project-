import React from 'react';
import { connect } from 'react-redux';
import DestinationInput from '../components/directionsPage/DestinationInput';
import WeatherSidebar from '../components/weatherPage/WeatherSidebar';
import Directions from '../components/directionsPage/Directions';
import BikeParking from '../components/directionsPage/BikeParking';
import GetOnYaBike from '../components/directionsPage/GetOnYaBike';
import Titles from '../components/static/Titles';
import NavBar from '../components/static/NavBar';
import WeatherIcon from '../components/weatherPage/WeatherIcon'
import { FetchWeather } from '../actions';
import BackgroundImg from '../backgrounds/background.png'
import '../components/static/Titles.css'

class DirectionsPage extends React.Component {
  render() {
    return(
      <div>
        <div className="container">
          <div className="container-fluid">
            <div className="row justify-content-between">
              <div className="col-3">
                <Titles />
              </div>
              <div className="col-sm-5 col-md-7">
                <NavBar />
              </div>
              <div className="col-12 col-md-7">
                <DestinationInput />
                <br/>
              </div>
              <div className="col-12 col-md-5">
                <WeatherIcon />
                <br/>
              </div>
              <div className="col-12 col-md-8">
                <div className="box-container" style={{'padding': '15px'}}>
                  <Directions
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4o0VU4jQ0QnqbzXYnAfO89GZBFUGT5tQ&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `800px`, marginTop:'10px' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                </div>
                <br/>
              </div>
              <div className="col-12 col-md-4">
                <GetOnYaBike/>
              </div>
            </div>
          </div>
        </div>
        <div className="start-bkg-container-scroll">
            <div className="bottomBackground">
               <div className="bottomBackground">
                 <div className="background_img">
                   <img src={BackgroundImg} width="100%" alt="userprofile"/>
                 </div>
               </div>
             </div>
          </div>
        </div>
    );
  }
}


const mapStateToProps = state => {
  return { currentWeather: state.weather };
}

export default connect(
  mapStateToProps,
  { FetchWeather }
)(DirectionsPage);
