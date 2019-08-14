import React from 'react';
import './Weather.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FetchWeather } from '../../actions';
import SearchBar from './SearchBar'
import AutoCompleteSearch from '../misc/AutoCompleteSearch';

class WeatherLocation extends React.Component {

  onSubmit = () => {
    if (this.props.weather.location) {
    var lat = this.props.weather.location.lat;
    var lng = this.props.weather.location.lng;
    this.props.FetchWeather(lng, lat);
    }
  }

  renderLocation = (formProps) => {
    return(
      <div className="form-group col-12">
        <label className="control-label textLabel">Place of weather forecast:</label>
        <AutoCompleteSearch />
        <center>
          <button className="btn btn-success" onClick={this.onSubmit}>Find Weather</button>
        </center>
      </div>
    );
  }

  render(){
    return(
        <div
          className="box-container"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <div className="row">
            <Field name="weatherLocation" component={this.renderLocation}/>
          </div>
        </div>
     );
   }
}

const mapStateToProps = state => {
  return { weather: state.weather };
}

const LocationForm = reduxForm({
  form: "weatherLocation",
})(WeatherLocation);

// previous for featch weather - AKEL (edit this to fetch for location input)
export default connect(
  mapStateToProps,
  { FetchWeather }
)(LocationForm);
