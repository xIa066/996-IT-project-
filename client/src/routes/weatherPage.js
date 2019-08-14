import React from 'react';
import WeatherSidebar from '../components/weatherPage/Weather';
import WeatherLocation from '../components/weatherPage/WeatherLocation';
import Titles from '../components/static/Titles';
import NavBar from '../components/static/NavBar';
import WeatherIcon from '../components/weatherPage/WeatherIcon';
import BackgroundImg from '../backgrounds/background.png'
class WeatherPage extends React.Component {

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
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <WeatherLocation />
              </div>
              <div className="col-sm-12 col-md-6">
                <WeatherIcon />
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col-12">
                <WeatherSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WeatherPage;
