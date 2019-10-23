import React from 'react';
import Navbar from '../components/navigation/Navbar';
import { useAuth0 } from "../login/authWrapper";

import Loading from '../components/misc/Loading';
import AllFamilies from '../components/families/AllFamilies';
import OwnedFamilies from '../components/families/OwnedFamilies';

const MyFamiliesPage = () => {
    const { user } = useAuth0();
      return(
        <div>
          <Navbar />
          {!user && (
            <Loading />
          )}
  
          {user && (
            <>
            <AllFamilies authUser={user} />
            <OwnedFamilies authUser={user} />
            </>
          )}
        </div>
      );
  }
  
  export default MyFamiliesPage;