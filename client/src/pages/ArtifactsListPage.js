import React, { Component } from 'react';
import ArtifactsList from '../components/artifacts/ArtifactsList';
import Navbar from '../components/navigation/Navbar';

import '../styles/artifactsList.css';

class ArtifactsListPage extends Component {
  render(){
    return(
      <div>
          <Navbar />
          <ArtifactsList />
      </div>
    );
  }
}

export default ArtifactsListPage;
