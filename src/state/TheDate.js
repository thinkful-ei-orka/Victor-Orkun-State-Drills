import React from 'react';

class TheDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {dateTime: new Date()};
  }  
  render() {
    console.log(this.state)  
    return (
        <div>{this.state.dateTime.toLocaleString()}</div>
    )
  }
}

export default TheDate