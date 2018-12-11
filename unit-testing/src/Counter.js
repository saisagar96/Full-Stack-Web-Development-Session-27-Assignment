import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };
    }

    incr = () => {
        let { value } = this.state;
        value ++;
        this.setState({
            value: value
        });
    }

    decr = () => {
        let { value } = this.state;
        value --;
        this.setState({value});
    }

    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={this.incr}>+</button>
                <button onClick={this.decr}>-</button>
            </div>
        );
    }
}

export default Counter;