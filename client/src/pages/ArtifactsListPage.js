import React, { Component } from 'react';
import ArtifactsList from '../components/artifacts/ArtifactsList';
import Navbar from '../components/navigation/Navbar';

class ArtifactsListPage extends Component {
  render(){
    return(
      <div>
        <div>
          <Navbar />
        </div>
        <div className="container-fluid">
          <ArtifactsList />
        </div>
      </div>
    );
  }
}

export default ArtifactsListPage;
