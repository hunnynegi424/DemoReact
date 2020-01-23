import React, { Component } from 'react'

class InputForm extends Component {
    render() {
        return (
            <div>
                
                {/* Displaying the props recieved from parent component */}
                {this.props.name && `You have typed ${this.props.name}.`}
            </div>
        )
    }
}

export default InputForm
