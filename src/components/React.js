import React, { Component } from 'react';
import './index.css';


// Functional Component
export default function ReactFunc() {
    return (
        <div className="funcComp">
            Hello, I'm a functional compnent
        </div>
    )
}


// Class component
export class ReactCls extends Component {
    render() {
        return (
            <div className="clsComp">
                Hello, I'm a class compnent
            </div>
        )
    }
}

// Only one component from a file can be exported defaultly