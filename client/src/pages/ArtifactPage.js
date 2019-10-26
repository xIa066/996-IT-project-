import React, { Component } from 'react';
import Navbar from  '../components/navigation/Navbar';
import ShowArtifact from '../components/artifacts/ShowArtifact';

class ArtifactPage extends Component {
    
    render(){
        return(
            <div>
                <Navbar/>
                <ShowArtifact id={this.props.id} />
            </div>
            
        );
    }
}

export default ArtifactPage;