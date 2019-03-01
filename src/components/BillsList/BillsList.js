import React from 'react';
import './BillsList.css';
import { Link } from "@reach/router";

class BillsList extends React.Component {
  render() {
    return (
      <div>
        <h1>Here will be a list of your bills</h1>
        <p>{this.props.allBills}</p>
        <p>{this.props.name}</p>
        <p>{this.props.amount}</p>
        <p>{this.props.due}</p>
        <Link to = "/add-bill">
          <button> + Add Another Bill</button>
        </Link>
      </div>
    );
  }
}

export default BillsList;