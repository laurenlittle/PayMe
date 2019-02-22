import React from 'react';
import './GetStarted.css';

class GetStarted extends React.Component {
  render() {
    return(
      <div className="get-started">
        <h1 className="welcome-message-header">Welcome to PayMe</h1>
        <h3>Take Control of your Finances.</h3>
        <p>Be on top of your money.</p>
        <p>Create a budget.</p>
        <p>Receive alerts when bills are due.</p>

        <div className="button-wrapper">
          <button className="sign-in-btn">Sign In</button>
          <button className="sign-up-btn">Sign Up</button>
        </div>
      </div>
    );
  }
}

export default GetStarted;