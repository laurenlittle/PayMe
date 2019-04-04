import React from 'react';
import './BillsList.css';
import  Bill from '../Bill/Bill';

class BillsList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: this.props.user
    }
  }

  render() {
    const { currentUser } = this.state;

    return (
      <>
        <h1> Here will be a list of your bills </h1>
        <h3> Map through the db and for each bill - create Bill component </h3>
        <Bill user={currentUser}/>
      </>
    );
  }
}

export default BillsList;