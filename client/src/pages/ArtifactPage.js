import React from 'react';
import Navbar from  '../components/navigation/Navbar';
import ShowArtifact from '../components/artifacts/ShowArtifact';
import Loading from '../components/misc/Loading';

import { useAuth0 } from "../login/authWrapper";

const ArtifactPage = props => {
    const { user } = useAuth0();
    return(
        <div>
            <Navbar/>
            {!user && (<Loading />)}
            {user && (
                <ShowArtifact id={props.id} authUser={user}/>
            )}

        </div>           
    );
}

export default ArtifactPage;