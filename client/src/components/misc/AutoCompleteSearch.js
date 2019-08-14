import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { connect } from 'react-redux';
import {
  FetchDestination,
  FetchDepartLocation,
  AddAddressDest,
  AddAddressDepart,
  ChangeLocation
} from '../../actions';


class AutoCompleteSearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = { address: '', latLng: null };
    }

    handleChange = address => {
      this.setState({ address });
    };

    // sends lat long into action creators for both destination and depart loc
    // the action creator used is dependent on whether the form entry being used
    // is for dest or departing location.
    handleSelect = (address) => {
      this.setState({ address: address });
      if(this.props.Destination){
        this.props.AddAddressDest(address);
      }else if (this.props.Depart){
        this.props.AddAddressDepart(address);
      }else{
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
            this.props.ChangeLocation(latLng);
          })
          .catch(error => console.error('Error', error));
      }
    };

    render(props) {
      return (
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places...',
                  className: 'form-control',
                })}
              />
              <div className="autocomplete-dropdown-container">

                {loading && <div>Searching...</div>}
                {suggestions.map(suggestion => {
                  return(
                    <div
                      {...getSuggestionItemProps(suggestion, {})}
                    >
                      <span>{suggestion.description}</span> <hr/>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      );
    }
  }

export default connect(null,
  {
    FetchDestination,
    FetchDepartLocation,
    AddAddressDepart,
    AddAddressDest,
    ChangeLocation
  })(AutoCompleteSearch);
