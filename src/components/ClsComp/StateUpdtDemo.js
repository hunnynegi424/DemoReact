import React, { Component } from 'react';
import '../index.css';
import InputForm from './InputForm';

class StateUpdtDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: '',
        }
    }

    clickHandler(m) {
        // Updating the state
        this.setState({count: this.state.count + m});
    }

    inputHandler = (e) => {
        // Updating the state
        this.setState({name: e.target.value})
    }

    submitHandler = (e) => {
        alert(`Welcome ${this.state.name}`);
        e.preventDefault();
    }

    render() {
        return (
            <div className="state-comp-container">

                {/* Updating state on a click of a button */}
                <div className="state-demo">

                    {/* Display counter */}
                    <div className="counter-container">
                        {this.state.count}
                    </div>

                    {/* Counter Incr/Decr buttons */}
                    <div className="button-container">
                        <button
                            className= "btn"
                            onClick={() => this.clickHandler(1)}
                        >
                            Incrementing Counter
                        </button>
                        <button
                            className= "btn"
                            onClick={() => this.clickHandler(-1)}
                        >
                            Decrementing Counter
                        </button>
                    </div>

                </div>
                <div className="state-demo">

                    {/* Updating state on input field change */}
                    <form onSubmit={this.submitHandler}>
                        Enter name: <input type="text" onChange={this.inputHandler} className="input-field"/>
                        <input type="submit" className="submit-btn" />
                    </form>

                    {/* Passing state as a prop to the child component */}
                    <InputForm name={this.state.name}/>
                </div>
            </div>
        )
    }
}

export default StateUpdtDemo
