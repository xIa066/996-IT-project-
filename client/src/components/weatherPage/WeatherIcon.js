import React from 'react';
import { connect } from 'react-redux';
import { FetchWeather } from '../../actions';
import Icons from './data/icons.json';
import './WeatherIcon.css'

class WeatherIcon extends React.Component {
  render(){
    var currently = this.props.currentWeather.currently;
    var iconImage = './static/moonCycle.gif'
    if (currently){
      iconImage = Icons[currently.icon];
    }
    return (
      <div>
        <img className="iconImage" src={require(`${iconImage}`)} alt="Icon" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentWeather: state.weather}
}

export default connect(
  mapStateToProps,
  { FetchWeather }
)(WeatherIcon);
