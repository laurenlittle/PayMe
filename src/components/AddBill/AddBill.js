import React from 'react';
import './AddBill.css';
import { navigate } from "@reach/router";

class AddBill extends React.Component {

  saveBill = event => {
    event.preventDefault()
    navigate("/bills-list");
    var bill = [this.props.name, this.props.amount, this.props.due];
    console.log(bill);
  }

  render() {
    return(
      <div>
        <h1>Click to submit and add a bill now!</h1>
        <form>
          <label htmlFor="bill-name">
           Name:
          <input
            id="bill-name"
            type = "text"
            value={this.props.name}
            onChange={this.props.handleBillNameChange}
            onBlur={this.props.handleBillNameChange}
            placeholder="Billing Company Name" required/>
          </label>
          <br/>
          <br/>
          <label htmlFor="bill-amount">
            Amount:
            <input
              id="bill-amount"
              type="text"
              value={this.props.amount}
              onChange={this.props.handleBillAmountChange}
              onBlur={this.props.handleBillAmountChange}
              placeholder="Amount Due"
              required />
          </label>
          <br/>
          <br/>
          <label htmlFor="bill-due-date">
            Due Date:
            <input
              id="bill-due-date"
              value={this.props.due}
              type="date"
              onChange={this.props.handleBillDueChange}
              onBlur={this.props.handleBillDueChange} required/>
          </label>
          <br/>
          <br/>
          <button onClick={this.saveBill}> + Add Bill</button>
        </form>
      </div>
    );
  }
}

export default AddBill;