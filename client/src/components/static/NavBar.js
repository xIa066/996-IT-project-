import React from 'react';
import {Link} from 'react-router-dom';
import './biker.png'
import './navbar.css'


class NavBar extends React.Component{
   render(){
     var bikerPath = './biker.png';
     return(
        <div className="row justify-content-end">
            <nav className="navbar navbar-expand-lg" id="nav3">
            <div className="container-fluid">
            <button className="navbar-toggler hidden-sm-up ml-auto" type="button" data-toggle="collapse" data-target="#collapsingNavbar"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                ☰
            </button>
            <div className="collapse navbar-collapse" id="collapsingNavbar">
                <ul className="nav navbar-nav text-right">
                    <li className="nav-item">
                        <Link to="/directions"><span className="nav-link text"> MAP MY RIDE </span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/weather"><span className="nav-link text"> WEATHER </span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/users"><span className="nav-link text"> MY PROFILE </span></Link>
                    </li>
                </ul>
            </div>
            </div>
            </nav>
        </div>
     );
   }
};

export default NavBar;
