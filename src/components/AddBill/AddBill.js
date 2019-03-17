import React from 'react';
import './AddBill.css';
import { auth, database } from '../../firebase';

class AddBill extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      amount: undefined,
      dueDate: undefined,
      paid: false,
      billId: 0 // maybe set this to start at the last number that's set in the DB, or maybe it shouldn't be in state and it should be moved somewhere else.
    }

    this.currentUser = this.props.user.uid;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.billsList = database.ref(`/billsList/${this.currentUser}/${this.state.billId}`);

    this.billsList.child('name').set(this.state.name);
    this.billsList.child('amount').set(this.state.amount);
    this.billsList.child('dueDate').set(this.state.dueDate);
    this.billsList.child('paid').set(this.state.paid);

    this.setState({
      billId: this.state.billId + 1
    });
  }

  render() {
    const { name, amount, dueDate } = this.state;
    return(
      <div>
        <h1>Click to submit and add a bill now!</h1>
        <form>

          <label htmlFor="bill-name">
           Name:
          <input
            id="bill-name"
            type = "text"
            value={ name }
            onChange={(event) => this.setState({ name: event.target.value })}
            placeholder="Billing Company Name" required/>
          </label>

          <br/>
          <br/>

          <label htmlFor="bill-amount">
            Amount:
            <input
              id="bill-amount"
              type="number"
              value={ amount }
              onChange={(event) => this.setState({ amount: event.target.value })}
              placeholder="Amount Due" required />
          </label>

          <br/>
          <br/>

          <label htmlFor="bill-due-date">
            Due Date:
            <input
              id="bill-due-date"
              value={ dueDate }
              type="date"
              onChange={(event) => this.setState({ dueDate: event.target.value })}  required/>
          </label>

          <br/>
          <br/>

          <button onClick={ this.handleSubmit } disabled={ !name }> + Add Bill</button>
          <button onClick={()=> auth.signOut()}> Sign OUT!!!!! </button>
        </form>
      </div>
    );
  }
}

export default AddBill;