import React from 'react';
import { connect } from 'react-redux';
import { fetchArtifacts } from '../../actions';
import Navbar from '../navigation/Navbar';

class ArtifactsList extends React.Component {
  componentDidMount(){
    this.props.fetchArtifacts();
  }

  renderArtifactsList(){
    return this.props.artifacts.map(artifact => {
      return (
        <div className="card" style={{marginRight: 18 + 'em'}}>
          <img className="card-img-top" src={artifact.photo} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{artifact.name}</h5>
            <p className="card-text">{artifact.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Date: {artifact.date}</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
          </div>
        </div>
      );
    });
  }

  render(){
    return(
      <div>
        {this.renderArtifactsList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { artifacts: Object.values(state.artifacts) };
}

export default connect(mapStateToProps, { fetchArtifacts })(ArtifactsList);
