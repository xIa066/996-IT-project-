import React from 'react';
import Navbar from  '../components/navigation/Navbar';
import CreateArtifact from '../components/artifacts/CreateArtifact';
import { useAuth0 } from "../login/authWrapper";

import Loading from '../components/misc/Loading';

const CreateArtifactPage = () => {
  const{ user } = useAuth0(); 
    return(
      <div>
        <div>
          <Navbar />
        </div>
        {!user && (<Loading />)}

        {user && (
          <div className="container-fluid">
            <CreateArtifact authUser={user} />
          </div>
        )}
      </div>
    );

}

export default CreateArtifactPage;
