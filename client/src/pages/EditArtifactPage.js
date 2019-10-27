import React from 'react';
import Navbar from  '../components/navigation/Navbar';
import EditArtifact from '../components/artifacts/EditArtifact';
import { useAuth0 } from "../login/authWrapper";

import Loading from '../components/misc/Loading';

const EditArtifactPage = props => {
    const { user } = useAuth0(); 
    return(
        <div>
            <Navbar />
            {!user && (<Loading />)}
            {user && (
                <div className="container-fluid">
                    <EditArtifact id={this.props.id} />
                </div>
            )}
            
        </div>
    );
}

export default EditArtifactPage;