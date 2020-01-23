import React, { Component } from 'react'
import '../index.css';
import EmpDetails from './EmpDetails';

class StateDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Harvinder Negi',
            age: 28,
            city: 'Chandigarh',
            country: 'India',
            company: 'Sphera Solutions',
            designation: 'Front-end Developer',
        }
    }

    render() {
        return (
            <div className="state-demo">
                <div>
                    {/* using state */}
                    Hi! I'm <b>{this.state.name}</b> (<b>{this.state.age}</b> years old) from <b>{this.state.city}</b>, <b>{this.state.country}</b>.
                </div>
                
                {/* passing state as props*/}
                <EmpDetails
                    company={this.state.company}
                    designation={this.state.designation}
                />
            </div>
        )
    }
}

export default StateDemo
