import React from 'react';
import './BillsList.css';
import  Bill from '../Bill/Bill';
import { database } from '../../firebase';

class BillsList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: this.props.user,
      data: []
    }

    this.userID = this.props.user.uid;
    this.userData = database.ref(`/billsList/${this.userID}/`);
  }

  componentDidMount() {

    this.userData.on('value', (snapshot) => {

      this.setState({
        data: snapshot.val()
      })
    })
  }

  render() {
    const { currentUser, data} = this.state;
    // console.log(data)

    return (
      <>
        <h1> Here will be a list of your bills </h1>
        <h3> Map through the db and for each bill - create Bill component </h3>
        <Bill
          user={currentUser}
          data={data}
        />
      </>
    );
  }
}

export default BillsList;