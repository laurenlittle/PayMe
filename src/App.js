import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import { Router, Link } from "@reach/router";
import GetStarted from "./components/GetStarted/GetStarted";
import AddBill from "./components/AddBill/AddBill";
import BillsList from "./components/BillsList/BillsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/"> <h1 className="App-logo-text"> PayMe </h1> </Link >
        </header>
        <div className="main-container">
          <div className="center-container">
            <Router>
              <GetStarted path="/" />
              <AddBill path = "/add-bill" />
              <BillsList path="/bills-list"/>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
