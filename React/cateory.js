import React, { Component } from 'react'
import '../cateory.css';



class cateory extends Component {
    render() {
        return (
            <div id="top" className="navbar navbar-dark navbar-fixed-top" role="navigation">
                <container />
                <Row />
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

class Row  extends  React.Component {
    render() {
        return (
            <div className="row">
                <div className="column">
                    <div className="wrapper">
                        <a href="Homepage.html" className="button">Gift</a>
                    </div>
                </div>
                <div className="column">
                    <button href="Homepage.html" className="btn btn--stripe" style='font-size:30px'>Memento</button>
                </div>
                <div className="column">
                    <div className="button-container-1">
                        <span className="mas">MASK1</span>
                        <button href="Homepage.html" id='work' type="button" name="Hover">Time</button>
                    </div>
                </div>
                <div className="column">
                    <div className="button-container-2">
                        <span className="mas">MASK2</span>
                        <button href="Homepage.html" type="button" name="Hover">Events</button>
                    </div>
                </div>
                <div className="column">
                    <div className="button-container-3">
                        <span className="mas">MASK3</span>
                        <button href="Homepage.html" type="button" name="Hover">Traveling</button>
                    </div>
                </div>
                <div className="half">
                    <div className="bbn bbn-small bbn-dark bbn-glitch">Kids</div>
                </div>
            </div>
        );
    }
}