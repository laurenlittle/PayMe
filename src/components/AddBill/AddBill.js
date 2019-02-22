import React from 'react';
import './AddBill.css';

class AddBill extends React.Component {

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
            value={this.state.name}
            onChange={this.handleBillNameChange}
            onBlur={this.handleBillNameChange}
            placeholder="Billing Company Name" required/>
          </label>
          <br/>
          <br/>
          <label htmlFor="bill-amount">
            Amount:
            <input
              id="bill-amount"
              type = "number"
              value={this.state.amount}
              onChange={this.handleBillAmountChange}
              onBlur={this.handleBillAmountChange}
              placeholder="Amount Due"
              required />
          </label>
          <br/>
          <br/>
          <label htmlFor="bill-due-date">
            Due Date:
            <input
              id="bill-due-date"
              value={this.state.due}
              type="date"
              onChange={this.handleBillDueChange}
              onBlur={this.handleBillDueChange} required/>
          </label>
          <br/>
          <br/>
          <button> + Add Bill</button>
        </form>
      </div>
    );
  }
}

export default AddBill;