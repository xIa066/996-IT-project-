import React, { Component } from 'react';
import Navbar from  '../components/navigation/Navbar';
import CreateArtifact from '../components/artifacts/CreateArtifact';

class CreateArtifactPage extends Component {
  render(){
    return(
      <div>
        <div>
          <Navbar />
        </div>
        <div className="container-fluid">
          <CreateArtifact />
        </div>
      </div>
    );
  }
}

export default CreateArtifactPage;
