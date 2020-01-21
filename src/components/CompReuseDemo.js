import React, { Component } from 'react';

class CompReuseDemo extends Component {
    render() {

        // we can manipulate the props
        const newArrayOfNames = this.props.names.map(each => {
            const newEach = each.split(", ");
            return `${newEach[1]} ${newEach[0]}`
        })

        return (
            <div>
                <h2>{this.props.title}</h2>
                <h5>Names:</h5>
                {newArrayOfNames.map(m => (
                    <p key={m}>{m}</p>
                ))}
            </div>
        )
    }
}

export default CompReuseDemo
