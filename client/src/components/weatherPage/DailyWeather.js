import React from 'react';
import { connect } from 'react-redux';
import { FetchWeather } from '../../actions';
import { renderLeftTable, renderRightTable } from '../misc/RenderTables';

class DailyWeather extends React.Component {
  render(){
    var weather = this.props.weather.daily.data[0];
    return(
      <div className="box-container">
        <h2>Today's Weather</h2>
        <hr/>
        <p>{weather.summary}</p>
        <div className="row">
          <div className="col-12 col-md-6">
            {renderLeftTable(weather)}
          </div>
          <div className="col-12 col-md-6">
            {renderRightTable(weather)}
          </div>
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
)(DailyWeather);
