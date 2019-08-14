import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from 'react-google-maps';
import { connect } from 'react-redux';
import { FetchDirections } from '../../actions';

class Steps extends React.Component {

  render = () => {
    console.log(this.props.routeSteps);
    return(
      <div>
        <div className = "box-container">
          {this.props.routeSteps && this.props.routeSteps.steps.map((step, i) => {
            var inst = step.instructions;
            return(
            <div>
              <div key={i}>In {step.distance.text}</div>
              <div dangerouslySetInnerHTML={{__html: inst}} />
              <hr/>
            </div>
          );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    routeSteps: state.directions.route,
    location: state.location,
  });
}

export default connect(
  mapStateToProps,
  { FetchDirections }
)(Steps);
