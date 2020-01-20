import React, { Component } from 'react';


// Functional Component
export default function ReactFunc() {
    const style = {
        backgroundColor: 'orange', flex: 1
    }
    return (
        <div style={style}>
            Hello, I'm a functional compnent
        </div>
    )
}


// Class component
export class ReactCls extends Component {
    render() {

        const styleObj = {
            backgroundColor: 'green',
            flex: 9,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }

        return (
            <div style={styleObj}>
                Hello, I'm a class compnent
            </div>
        )
    }
}

// Only one component from a file can be exported defaultly