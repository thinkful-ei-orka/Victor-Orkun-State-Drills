import React from 'react';
import ReactDOM from 'react-dom';

export default class HelloWorld extends React.Component {
    state = {
        who : 'world'
    }
    handleClick = e => {
        this.setState({
            who : 'friend!'
        })
    }

    handleReact = e => {
        this.setState({
            who : 'React!'
        })
    }

    handleWorld = e => {
        this.setState({
            who : 'World!'
        })
    }

    render() {
        return(
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.handleWorld}>World</button>
                <button onClick={this.handleClick}>Friend</button>
                <button onClick={this.handleReact}>React</button>
            </div>
        )
    }
}