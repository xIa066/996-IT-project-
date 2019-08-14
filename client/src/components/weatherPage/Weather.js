import React from 'react';
import './Weather.css';
import Icons from './data/icons.json';
import { connect } from 'react-redux';
import { FetchWeather } from '../../actions';
import WeeklyForecast from './WeeklyForecast';
import DailyWeather from './DailyWeather';
import CurrentWeather from './CurrentWeather';

class WeatherSidebar extends React.Component {
  render(){
    var currentWeather = this.props.currentWeather.currently;
    if(currentWeather){
      return(
          <div className="row">
            <div className="form-group col-sm-12 col-lg-6">
              <div className="box-container">
                <h2>Current Weather</h2>
                <hr/>
                <p>The weather looks {currentWeather.summary} at<b> {currentWeather.temperature}°C.</b></p>
                <CurrentWeather />
              </div>
              <br/>
              <DailyWeather />
            </div>
            <br/>
            <WeeklyForecast />
          </div>
       );
    }
    else{
      return(
        <div></div>
      )
    }

   }
}

const mapStateToProps = state => {
  return { currentWeather: state.weather };
}

export default connect(
  mapStateToProps,
  { FetchWeather }
)(WeatherSidebar);
