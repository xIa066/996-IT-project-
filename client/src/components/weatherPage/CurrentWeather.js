import React from 'react';
import { connect } from 'react-redux';
import { FetchWeather } from '../../actions';
import { renderLeftTable, renderRightTable } from '../misc/RenderTables';

class CurrentWeather extends React.Component {
  render(){
    var currentWeather = this.props.weather.currently;
    console.log(currentWeather);
    return(
      <div className="row">
        <div className="col-12 col-md-6">
          {renderLeftTable(currentWeather)}
        </div>
        <div className="col-12 col-md-6">
          {renderRightTable(currentWeather)}
        </div>
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
)(CurrentWeather);
