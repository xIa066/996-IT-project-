import React from 'react';
import { Link } from 'react-router-dom';

import './carousel.css';
import famImage from '../../images/slide2.jpg';
import secondImage from '../../images/recent2.jpg';
import prevButton from '../../images/left.png';
import nextButton from '../../images/right.png';

class CarouselImages extends React.Component {
  render(){
    return(
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={famImage} className="d-block w-100 h-75" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={secondImage} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <img src={prevButton} alt="Previous" />
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <img src={nextButton} alt="Previous" />
        </a>
      </div>
    );
  }
}

export default CarouselImages;
