import React from 'react';

export default class RouletteGun extends React.Component{
    static defaultProps = {
        bulletInChamber : 8
    }

   
    state = {
        chamber: null,
        spinningTheChamber: false
   };

   handleClick = () => {
    this.setState({
        spinningTheChamber : true
    })

    this.timeout = setTimeout(() => {
        const random = Math.ceil(Math.random() * 8)
        this.setState({
            chamber: random,
            spinningTheChamber: false
        })
    }, 2000)
}
    display() {
        const { bulletInChamber } = this.props
        const { chamber, spinningTheChamber } = this.state
        if(spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        }
        else if(chamber===bulletInChamber) {
            return 'BANG!!!!'
        }
        else {
            return "you're safe!"
        }
    }    

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    render(){
        return(
            <div>
                <p>{this.display()}</p>
                <button onClick={this.handleClick}>Pull the trigger!</button>
            </div>
        )
    }
}

