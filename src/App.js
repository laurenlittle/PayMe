import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import { Router, Link, navigate } from "@reach/router";
import GetStarted from "./components/GetStarted/GetStarted";
import AddBill from "./components/AddBill/AddBill";
import BillsList from "./components/BillsList/BillsList";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      amount: Number,
      due: Date,
      paid: false
    }
  }

  handleBillNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }
  handleBillAmountChange = event => {
    this.setState({
      amount: event.target.value
    });
  }
  handleBillDueChange = event => {
    this.setState({
      due: event.target.value
    });
  }

  saveBill = event => {
    event.preventDefault()
    navigate("/bills-list");
    console.log(this.props.name, this.props.amount, this.props.due);
  }

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
              <AddBill
                path = "/add-bill"
                handleBillNameChange={this.handleBillNameChange}
                handleBillAmountChange={this.handleBillAmountChange}
                handleBillDueChange={this.handleBillDueChange}
                {...this.state} />
              <BillsList
                path="/bills-list"
                handleBillNameChange={this.handleBillNameChange}
                handleBillAmountChange={this.handleBillAmountChange}
                handleBillDueChange={this.handleBillDueChange}
                {...this.state} />
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
