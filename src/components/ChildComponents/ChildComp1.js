import React from 'react';
import ChildComp2 from './ChildComp2';

function ChildComp1() {
    return (
        <div>
            Hey, I'm child component 1.
            <ChildComp2 />
        </div>
    )
}

export default ChildComp1;
