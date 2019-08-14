import React from 'react';

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '865361983446-or6rvhp74uidllmmhr5hae33mmini0se.apps.googleusercontent.com',
        scope: 'email',
        cookiepolicy: 'single host origin'
      })
      .then(()=>{
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  }

  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get()
    });
  };

  renderAuthButton(){
    if (this.state.isSignedIn === null){
      return null;
    }else if (this.state.isSignedIn) {
      //this.auth you can suss any point of info you want
      console.log(this.auth);
      console.log(this.auth.currentUser.get().getBasicProfile());
      return (
        <button onClick={this.onSignOutClick}>
          Sign Out
        </button>
      );
    }else {
      return(
        <button onClick={this.onSignInClick}>
          Sign in with Google
        </button>
      );
    }
  }

  render(){
    return(
      <div>
      {this.renderAuthButton()}
      </div>
    );
  }
}

export default GoogleAuth;
