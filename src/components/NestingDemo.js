import React, { Component } from 'react';

class NestingDemo extends Component {
    render() {
        console.log('props', this.props)
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default NestingDemo
