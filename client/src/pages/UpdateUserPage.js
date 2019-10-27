import React from 'react';
import Navbar from  '../components/navigation/Navbar';
import EditUser from '../components/families/EditUser';
import { useAuth0 } from "../login/authWrapper";
import Loading from '../components/misc/Loading';

const UpdateUserPage = () =>{
    const {user} = useAuth0();

    return(
        <div>
            <Navbar />
            {!user && (
                <Loading />
            )}

            {user && (
                <EditUser authUser={user} />
            )}
        </div>
    );
}

export default UpdateUserPage; 