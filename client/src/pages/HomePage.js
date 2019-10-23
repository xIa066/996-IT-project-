import React from 'react';
import Navbar from '../components/navigation/Navbar';
import CarouselImages from '../components/homepage/CarouselImages';
import RecentArtifacts from '../components/artifacts/RecentArtifacts';
import AllArtifacts from '../components/artifacts/AllArtifacts';
import { useAuth0 } from "../login/authWrapper";

import '../styles/Homepage.css';

const HomePage = () => {
  const { isAuthenticated, user } = useAuth0();
    return(
      <div>
        <Navbar />
        {!isAuthenticated && (
          <CarouselImages />
        )}

        {isAuthenticated &&  user && (
          <>
          <RecentArtifacts authUser={user}/>
          <AllArtifacts />
          </>
        )}
      </div>
    );
}

export default HomePage;