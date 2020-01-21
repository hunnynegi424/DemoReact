import React, { Component } from 'react'
import ChildComp1 from './ChildComponents/ChildComp1';

class NestingDemo extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'white', color: 'black'}}>
                <ChildComp1/>
            </div>
        )
    }
}

export default NestingDemo
