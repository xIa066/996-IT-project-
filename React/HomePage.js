import React, { Component } from 'react'
import '../Homepage.css';



class HomePage extends Component {
    render() {
        return (
            <div id="top" className="navbar navbar-dark navbar-fixed-top" role="navigation">
                <container />
                <recent-projects />
                <All_product />
                <Footer />
            </div>
        );
    }
}

class AppHeader  extends  React.Component {
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
class AppHeader  extends  React.Component {
    render() {
        return (
            <div id="projects" className="recent-projects">
                <span data-text="Recent Project" className="dashed-shadow hello">Recent Project</span>
                <br/>

                <div className="recent-projects-content content-block-gray">
                    <div id="owl-example" className="owl-carousel">
                        <div>
                            <img src="../recent1.jpg" alt="" />
                                <a href="#">Cartoon de loop</a>
                        </div>
                        <div>
                            <img src="../recent2.jpg" alt="" />
                                <a href="#">In to the snow</a>
                        </div>
                        <div>
                            <img src="../recent3.jpg" alt="" />
                                <a href="#">girl in sunset</a>
                        </div>
                        <div>
                            <img src="../recent4.jpg" alt="" />
                                <a href="#">Tools</a>
                        </div>
                        <div>
                            <img src="../recent5.jpg" alt="" />
                                <a href="#">Sunrise in west</a>
                        </div>
                        <div>
                            <img src="../recent6.jpg" alt="" />
                                <a href="#">girl in sunset</a>
                        </div>
                        <div>
                            <img src="../recent4.jpg" alt="" />
                                <a href="#">Lorem Ipsum</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class All_product  extends  React.Component {
    render() {
        return (
            <div id="body" className="All_product">
                <h1><span>gallery</span></h1>
                <ul className="Product">
                    <li>
                        <a href="gallery-single-post.html">
                            <img src="../images/mustache1.jpg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="gallery-single-post.html">
                            <img src="../images/mustache2.jpg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="gallery-single-post.html">
                            <img src="../images/mustache3.jpg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="gallery-single-post.html">
                            <img src="../images/mustache4.jpg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="gallery-single-post.html">
                            <img src="../images/mustache5.jpg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="gallery-single-post.html">
                            <img src="../images/mustache6.jpg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="gallery-single-post.html">
                            <img src="../images/mustache7.jpg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="gallery-single-post.html">
                            <img src="../images/mustache8.jpg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="gallery-single-post.html">
                            <img src="../images/mustache9.jpg" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

class Footer  extends  React.Component {
    render() {
        return (
            <div id="footer" className="Footer">
                <div>
                    <p>&copy; 2019 by group 996 </p>
                    {/*<ul>*/}
                        {/*<li>*/}
                            {/*<a href="http://freewebsitetemplates.com/go/twitter/" id="twitter">twitter</a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                            {/*<a href="http://freewebsitetemplates.com/go/facebook/" id="facebook">facebook</a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                            {/*<a href="http://freewebsitetemplates.com/go/googleplus/" id="googleplus">googleplus</a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                            {/*<a href="http://pinterest.com/fwtemplates/" id="pinterest">pinterest</a>*/}
                        {/*</li>*/}
                    {/*</ul>*/}
                </div>
            </div>
        );
    }
}