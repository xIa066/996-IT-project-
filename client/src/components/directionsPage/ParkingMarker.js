import React from 'react';
import bikeIcon from './bike_icon.png';
import { Marker } from 'react-google-maps';

// Marker to indicate bike parking areas
class ParkingMarker extends React.Component {
  render(){
    return(
      <Marker
        position={this.props.location}
        icon={bikeIcon}
      />
    );
  }
}

export default ParkingMarker;
