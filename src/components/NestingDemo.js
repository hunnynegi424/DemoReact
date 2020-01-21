import React from 'react'
import './index.css';
import ChildComp1 from './ChildComponents/ChildComp1';

function NestingDemo () {
        return (
            <div className="nestingDemo">
                <ChildComp1/>
            </div>
        )
}

export default NestingDemo
