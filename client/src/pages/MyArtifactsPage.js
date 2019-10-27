import React from 'react';
import Navbar from  '../components/navigation/Navbar';
import MyArtifacts from '../components/artifacts/MyArtifacts';
import Loading from '../components/misc/Loading';

import { useAuth0 } from "../login/authWrapper";

const MyArtifactsPage = () => {
    const { user } = useAuth0();
    return(
        <div>
            <Navbar/>
            {!user && (<Loading />)}
            {user && (
                <MyArtifacts authUser={user}/>
            )}
        </div>           
    );
};

export default MyArtifactsPage;