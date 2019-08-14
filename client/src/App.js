import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import DirectionsPage from './routes/directionsPage';
import GetOnYaBikePage from './routes/getonyabikePage';
import WeatherPage from './routes/weatherPage';
import UserPage from './routes/userPage';
import HomePage from './routes/homePage';
import BackgroundImg from './backgrounds/background.png'
import './App.css'
import { connect } from 'react-redux';
import { FetchWeather } from './actions';

class App extends React.Component {

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.props.FetchWeather(position.coords.longitude, position.coords.latitude),
      err => this.props.FetchWeather("144.9519453", "-37.79886156")
    );
  }

  render() {
    return(
      <BrowserRouter>
      <div className="bkg-animated">
            <Route path="/" exact component={HomePage} />
            <Route path="/weather" exact component={WeatherPage} />
            <Route path="/directions" exact component={DirectionsPage} />
            <Route path="/getonyabike" exact component={GetOnYaBikePage} />
            <Route path="/users" exact component={UserPage} />
      </div>
      <div className="bottomBackground start-bkg-container-scroll">
         <div className="bottomBackground">
           <div className="background_img">
             <img src={BackgroundImg} width="100%" alt="userprofile"/>
           </div>
         </div>
       </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
    return { weather: state.weather };
}


export default connect(
    mapStateToProps,
    { FetchWeather }
)(App);
