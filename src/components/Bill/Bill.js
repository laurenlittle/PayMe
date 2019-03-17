import React from 'react';
import { database } from '../../firebase';


class Bill extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    }

    this.currentUser = this.props.user;
    this.userID = this.props.user.uid;

    // If this pathway has a value, take a snapshot of it.
   this.myData = database.ref(`/billsList/${this.userID}/`).on('value', (snapshot) => {
     console.log(' IS THIS MY DATA', snapshot.val());
   })

   console.log(this.myData);
  }

  render() {

    return(
      <div>
        {/* <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}

      </div>
    )
  }
}

export default Bill;