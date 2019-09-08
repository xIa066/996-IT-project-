import React, { Component } from 'react';
import Navbar from '../components/navigation/Navbar';
import CarouselImages from '../components/homepage/CarouselImages';

class HomePage extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <CarouselImages />
      </div>
    );
  }
}

export default HomePage;
