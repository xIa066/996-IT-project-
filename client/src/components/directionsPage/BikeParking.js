import React from 'react';
import { connect } from 'react-redux';
import { FetchParking } from '../../actions';

class BikeParking extends React.Component {

  onSubmit = () => {
    if(this.props.location.resultsDestination){
      var lng = this.props.location.resultsDestination.lng;
      var lat = this.props.location.resultsDestination.lat;
      this.props.FetchParking(lat, lng);
    }
  }

  // renders information on bike parking if it's available i.e if a valid
  // destination has been entered
  render(){
    return(
      <div className="box-container">
      <h2>Bicycle Parking Information</h2>
      <hr/>
      <button className="btn btn-success mb-3" onClick={this.onSubmit}>Find Parking</button>
      {this.props.parking.location_desc && <p>Location Description: {this.props.parking.location_desc}</p> }
      {this.props.parking.description && <p>Rack type: {this.props.parking.description}</p> }
      {this.props.parking.condition_rating && <p>Security Rating (1-5): {this.props.parking.condition_rating}</p> }
      {this.props.parking.asset_class && <p>Type: {this.props.parking.asset_class}</p> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    parking: state.parking,
    location: state.location
  }
}

export default connect(
  mapStateToProps,
  { FetchParking }
)(BikeParking);
