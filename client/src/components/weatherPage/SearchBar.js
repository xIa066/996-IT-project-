import React from 'react';
import { connect } from 'react-redux';
import PlacesAutocomplete, {
 geocodeByAddress,
 getLatLng,
} from 'react-places-autocomplete';
import { FetchWeather } from '../../actions';
import { STATES } from 'mongoose';


class SearchBar extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     address: '',
     latLng: null
    };
 }

 handleChange = address => {
   this.setState({ address });
 };

 handleSelect = address => {
   geocodeByAddress(address)
     .then(results => getLatLng(results[0]))
     .then(latLng => {
       this.setState({latLng: latLng});
     })
     .catch(error => console.error('Error', error));

 };

 onSubmit = () => {
   if (this.state.latLng) {
   var lat = this.state.latLng.lat;
   var lng = this.state.latLng.lng;
   this.props.FetchWeather(lng, lat);
   }
 }

 render() {
   return (
     <PlacesAutocomplete
       value={this.state.address}
       onChange={this.handleChange}
       onSelect={this.handleSelect}
     >
       {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
         <form>
           <input
             {...getInputProps({
               placeholder: 'Search Places ...',
               className: 'form-control',
             })}
           />
           <div>
             {loading && <div>Loading...</div>}
             {suggestions.map(suggestion => {
               return (
                 <div {...getSuggestionItemProps(suggestion, {})}>
                   <span>{suggestion.description}</span>
                 </div>
               );
             })}
           </div>
           <center>
             <button className="btn btn-success" onClick={this.onSubmit}>Find Weather</button>
           </center>
         </form>
       )}
     </PlacesAutocomplete>
   );
 }
}
const mapStateToProps = state => {
    return { weather: state.weather };
}


export default connect(
    mapStateToProps,
    { FetchWeather }
)(SearchBar);
