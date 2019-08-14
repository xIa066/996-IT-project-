import React from 'react';
import User from '../components/userPage/User';
import Trips from '../components/userPage/Trips';
import Titles from '../components/static/Titles';
import NavBar from '../components/static/NavBar';
class UserPage extends React.Component {

  render() {
    return(
      <div className="container">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-3">
                <Titles />
              </div>
              <div className="col-sm-5 col-md-7">
                <NavBar />
              </div>
            <div className="col-8">
              <Trips />
            </div>
            <div className="col-4">
              <User />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage
