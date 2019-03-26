import React from 'react';
import { database } from '../../firebase';


class Bill extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }

    this.currentUser = this.props.user;
    this.userID = this.props.user.uid;

    // If this pathway has a value, take a snapshot of it.
    this.userData = database.ref(`/billsList/${this.userID}/`);
  }

  componentDidMount() {

    this.userData.on('value', (snapshot) => {

      this.setState({ data: snapshot.val() })
    })
  }

  render() {
    const { data } = this.state;
    console.log(data);

    if (!this.state.data.length)
      return null;

    let billName = this.state.data.map((el, i) => (
            <li key={i}> {el.name} {el.amount} {el.dueDate} </li>
    ))

    return(
      <div>

        <pre>
          { JSON.stringify(data, null, 2) }
        </pre>

        <ul>
          {billName}
        </ul>

      </div>
    )
  }
}

export default Bill;