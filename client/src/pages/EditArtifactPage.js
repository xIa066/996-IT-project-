import React, { Component } from 'react';
import Navbar from  '../components/navigation/Navbar';
import EditArtifact from '../components/artifacts/EditArtifact';

class EditArtifactPage extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className="container-fluid">
                    <EditArtifact match={this.props.match} />
                </div>
            </div>
        );
    }
}

export default EditArtifactPage;