import React from 'react';
import './index.css';

function CompReuseDemo(props) {
        // we can manipulate the props
        const newArrayOfNames = props.names.map(each => {
            const newEach = each.split(", ");
            return `${newEach[1]} ${newEach[0]}`
        })

        return (
            <div className="compReuse">
                <h2>{props.title}</h2>
                <h5>Names:</h5>
                <ol>{newArrayOfNames.map(m => (
                    <li key={m}>{m}</li>
                ))}</ol>
            </div>
        )
}

export default CompReuseDemo
