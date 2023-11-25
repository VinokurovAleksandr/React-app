import React, { Component } from "react";

class ClassCounter extends React.Component { 
    
    constructor(props) {
        super(props);
        this.state = { 
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

     increment() {
        this.setState({count: this.state.count + 1})
       
    }

     decrement() {
       this.setState({count: this.state.count - 1})
    }
    
    render() {
        return (
            <>
            <h1>{this.state.count}</h1>
            <button type="button" onClick={this.increment} >+</button>
            <button type="button" onClick={this.decrement}>-</button>
            </>

        )
    }
};

export default ClassCounter;