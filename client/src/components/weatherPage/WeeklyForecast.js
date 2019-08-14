import React from 'react';
import { getDayString } from '../misc/Dates';
import { connect } from 'react-redux';
import Icons from './data/icons.json';

class WeeklyForecast extends React.Component {

  renderDay(day){
    const icon = Icons[day.icon]
    return(
      <tr>
      <th scope="row">{getDayString(day.time)}</th>
      <td><img className="iconImage" src={require(`${icon}`)} alt="Icon" /></td>
      <td>{day.temperatureHigh}°C</td>
      <td>{(day.precipProbability * 100).toFixed(1)}%</td>
      </tr>
    );
  }

  renderForecastTable(){
    const weekForecast = this.props.weather.daily.data;
    return(
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Weather</th>
                  <th scope="col">Temperature</th>
                  <th scope="col">Rain</th>
                </tr>
              </thead>
              <tbody>
                {this.renderDay(weekForecast[1])}
                {this.renderDay(weekForecast[2])}
                {this.renderDay(weekForecast[3])}
                {this.renderDay(weekForecast[4])}
                {this.renderDay(weekForecast[5])}
                {this.renderDay(weekForecast[6])}
                {this.renderDay(weekForecast[7])}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  render(){
    return(
      <div className="form-group col-sm-12 col-lg-6">
        <div className="box-container">
          <h2>Weekly Forecast</h2>
          <hr/>
          <p>{this.props.weather.daily.summary}</p>
          {this.renderForecastTable()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeeklyForecast);
