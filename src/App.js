import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import { Link } from "@reach/router";
import GetStarted from "./components/GetStarted/GetStarted";
import AddBill from "./components/AddBill/AddBill";
import BillsList from "./components/BillsList/BillsList";
import { auth } from './firebase';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      bills: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      console.log('AUTH STATUS', currentUser);

      this.setState({
        currentUser
      });
    });
  }

  render() {

    const {currentUser} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/"> <h1 className="App-logo-text"> PayMe </h1> </Link>
        </header>
        <div className="main-container">
          <div className="center-container">
          { !currentUser && <GetStarted /> }
          {
            currentUser &&
            <>
              <AddBill user={currentUser}/>
              <BillsList user={currentUser}/>
            </>
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
