import React, { Component } from 'react'
import '../index.css';

class EmpDetails extends Component {
    render() {
        return (
            <div>
                I work at <b>{this.props.company}</b> as a <b>{this.props.designation}</b>.
            </div>
        )
    }
}

export default EmpDetails
