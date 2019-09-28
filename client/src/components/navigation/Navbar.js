import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/navbar.css'

class Navbar extends React.Component {
  render(){
    return(
      <div id="top" className="navbar navbar-expand-lg navbar-dark fixed-top py-0" role="navigation">
          <div className="container">
          <Link className="navbar-brand" to="/"><strong>Bloodlines,</strong>Tales and Roots</Link>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <ul className="nav navbar-nav ">
              <li className="active nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/category">Category</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/social">Social</Link></li>
            </ul>
          </div>
          </div>
      </div>
    );
  }
}

export default Navbar;
