import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';

class HomePage extends Component {
  render(){
    return(
      <div>
        <Navbar />
      </div>
    );
  }
}

export default HomePage;
