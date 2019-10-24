import React from 'react';
import Navbar from '../components/navigation/Navbar';
import { useAuth0 } from "../login/authWrapper";

import Loading from '../components/misc/Loading';
import CreateFamily from '../components/families/CreateFamily';

const CreateFamilyPage = () =>{
    const { user } = useAuth0();

    return(
        <div>
            <Navbar />
            {!user && (
                <Loading />
            )}

            {user && (
                <CreateFamily authUser={user} />
            )}
        </div>
    );
};

export default CreateFamilyPage;
