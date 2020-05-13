import React from 'react';

export default class Bomb extends React.Component {
     state = {
          count: 0,
     };

     componentDidMount() {     
     this.interval = setInterval(() => {
          this.setState({
               count: this.state.count + 1
          })
          }, 1000)
     }

     componentWillUnmount() {
          clearInterval(this.interval);
     }

     display() {
     const { count } = this.state
     if (count >= 8) {
          clearInterval(this.interval)
          return 'BOOM!'
     } else if (count % 2 === 0) {
          return 'tick'
     } else return 'tock'
     }

     render() {
          return(
          <div className='Countdown'>
                    {this.display()}
          </div>
          )
     }
}