import React from 'react';
import './DestinationInput.css'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  FetchDepartLocation,
  FetchDestination,
  CheckParking,
  FetchParking
} from '../../actions';
import SearchBar from '../misc/AutoCompleteSearch';
import { Link } from 'react-router-dom';
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

//Input box for destination takes a few user inputs on location and user
//preference to output a route on map display.
class DestinationInput extends React.Component{

   // will take care of form submittal in future to update destination routes
   onSubmit = (formValues) => {
     if(formValues.parkingOption || this.props.directions.parking){
       this.props.CheckParking(formValues.parkingOption)
     }
     if(this.props.directions.depart && this.props.directions.destination){
       geocodeByAddress(this.props.directions.depart)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
          this.props.FetchDepartLocation(latLng);
        })
        .catch(err => console.error('Error', err));

        geocodeByAddress(this.props.directions.destination)
         .then(results => getLatLng(results[0]))
         .then(latLng => {
           this.props.FetchDestination(latLng);
           this.props.FetchParking(latLng.lat, latLng.lng);
         })
         .catch(err => console.error('Error', err));
      }
   }

   // both renderDepart and renderDestination use searchbar formed in
   // AutoCompleteSearch to help get latlong for both the departing location
   // and destination
   renderDepart = (formProps) => {
     return(
       <div className="form-group col-xs-12 col-12">
         <label className="control-label text">Departing from:</label>
         <SearchBar Depart={true}/>
       </div>
     );
   }

    renderDestination = (formProps) => {
      return(
        <div className="form-group col-xs-12 col-12">
          <label className="control-label text">Your Destination:</label>
          <SearchBar Destination={true}/>
        </div>
      );
    }

   renderParkingOption = (formProps) => {
     return(
       <div className="form-check">
         <label className="checkboxContainer text">Find nearest bike parking
           <input
              type="checkbox"
              {...formProps.input}
            />
           <span className="checkmark"></span>
         </label>
        </div>
     );
   }

   render(){
    return(
       // form made to take the users preffered destination, departure location,
       // time of departure. All gets put into state when button is pressed.
      <form
        className="box-container"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div className="row ">
          <Field name="departFrom" component={this.renderDepart}/>
          <Field name="destination" component={this.renderDestination}/>
          <Field name="parkingOption" component={this.renderParkingOption}/>
        </div>
        <center>
          <button className="btn yes" onClick={() =>
            this.onSubmit}>Map My Ride</button>
        </center>
      </form>
     );
   }
};

const mapStateToProps = state => {
  return { directions: state.directions };
}

const wrappedInputForm = reduxForm({
  form: "destinationInput",
})(DestinationInput);

export default connect(
  mapStateToProps,
  {
    FetchDepartLocation,
    FetchDestination,
    CheckParking,
    FetchParking
  }
)(wrappedInputForm);
