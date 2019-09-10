import React from 'react';
import { connect } from 'react-redux';
import { fetchArtifacts } from '../../actions';
import Navbar from '../navigation/Navbar';

import './card.css';

class ArtifactsList extends React.Component {
  componentDidMount(){
    this.props.fetchArtifacts();
  }

  renderArtifactsList(){
    return this.props.artifacts.map((artifact, index) => {
      return (
        <div className="card border-dark" style={{marginRight: 0.5 + 'em'}}>
          <img className="card-img-top" src={artifact.photo} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{artifact.name}</h5>
            <p className="card-text">{artifact.description}</p>
            <p className="card-text"><small className="text-muted">Date: {artifact.date}</small></p>
          </div>
          {console.log(index % 3)}
        </div>
      );
    });
  }

  render(){
    return(
      <div className="card-deck">
        {this.renderArtifactsList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { artifacts: Object.values(state.artifacts) };
}

export default connect(mapStateToProps, { fetchArtifacts })(ArtifactsList);
