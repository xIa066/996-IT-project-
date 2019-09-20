import React, { Component } from 'react'
import '../index.css';



class index extends Component {
    render() {
        return (
            <div id="top" className="navbar navbar-dark navbar-fixed-top" role="navigation">
                <container />
                <carousel_slide />
            </div>
        );
    }
}
class container  extends  React.Component {
    render() {
        return (
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#"><strong>Ju</strong>Shang</a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <div className="search-box">
                            <input type="text" name="" className="search-txt" placeholder="Type to search"/>
                            <a className="search-btn" href="#">
                                <i className="fas fa-search"></i>
                            </a>
                        </div>
                        <li className="active"><a href="#carousel-header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="cateory.html" className="button">Category</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#social">Social</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

class CarouselSlide  extends  React.Component {
    render() {
        return (
            <div id="carousel-header" className="carousel slide" data-ride="carousel" data-interval="8000">

                <!-- Wrapper for slides -->
                <div className="carousel-inner">
                    <button className="button">Login/Sigh up</button>
                    <div className="item active">
                        <img src="../slide2.jpg" alt="" />
                    </div>

                    <div className="item">
                        <img src="../slide1.jpg" alt="" />
                    </div>
                </div>

                <!-- Controls -->
                <a className="left carousel-control" href="#carousel-header" role="button" data-slide="next">
                    <img src="../left.png" alt="Previous" />
                </a>
                <a className="right carousel-control" href="#carousel-header" role="button" data-slide="next">
                    <img src="../right.png" alt="Next" />
                </a>
            </div>

        );
    }
}
