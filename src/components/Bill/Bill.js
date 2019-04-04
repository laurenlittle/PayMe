import React from 'react';
// import { database } from '../../firebase';


class Bill extends React.Component {
  constructor(props) {
    super(props);

    this.data = this.props.billData;
    console.log(this.props)
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    console.log('lakdsjfaljf', this.props.data);

    if (!this.data.length)
      return null;

    let billInfo = this.data.map((el, i) => (
            <li key={i}> {el.name} {el.amount} {el.dueDate} </li>
    ))

    return(
      <div>

        <ul>
          {billInfo}
        </ul>

      </div>
    )
  }
}

export default Bill;