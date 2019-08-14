import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Titles from '../components/static/Titles';
import NavBar from '../components/static/NavBar';
import BackgroundBikeImg from '../backgrounds/backgroundbike.png'
import { FetchLogin } from '../actions';
import '../components/static/Titles.css';
import '../App.css'

class HomePage extends React.Component {
  componentDidMount() {
    this.props.FetchLogin();
  }

  render() {
    var signUpIn ="LOGIN / SIGN UP"
    var signUpInRoute = "/auth/google"
    if(this.props.LoginStatus.success){
      signUpIn = "LOGOUT"
      signUpInRoute = "/auth/logout"
    }
    else{
      signUpIn = "LOGIN / SIGN UP"
      signUpInRoute = "/auth/google"
    }
    return(
      <div>
        <div className="container">
          <div className="container-fluid">
            <div className="row justify-content-between">
              <div className="col-3">
                <Titles />
              </div>
              <div className="col-sm-5 col-md-7">
              <NavBar />
              </div>
            </div>
            <div className="row justify-content-center">
              <Link to="/directions"><button className="btn yes"> MAP MY RIDE </button></Link>
              <br /><br />
              <Link to="/weather"><button className="btn yes"> WEATHER FORECAST </button></Link>
              <br /><br />
              <a href={signUpInRoute}><button className="btn no"> {signUpIn  } </button></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    LoginStatus: state.login
   };
};

export default connect(
  mapStateToProps,
  { FetchLogin }
)(HomePage);
