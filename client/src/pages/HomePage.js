import React, { Component } from 'react';
import Navbar from '../components/navigation/Navbar';
import CarouselImages from '../components/homepage/CarouselImages';
import RecentArtifacts from '../components/artifacts/RecentArtifacts';
import AllArtifacts from '../components/artifacts/AllArtifacts';
import { useAuth0 } from "../login/authWrapper";

const HomePage = () => {
  const { isAuthenticated } = useAuth0();
    return(
      <div>
        <Navbar />
        {!isAuthenticated && (
          <CarouselImages />
        )}

        {isAuthenticated && (
          <>
          <RecentArtifacts />
          <AllArtifacts />
          </>
        )}
      </div>
    );
}

export default HomePage;