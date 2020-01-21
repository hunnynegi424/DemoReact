import React from 'react';
import ChildComp3 from './ChildComp3';

function ChildComp2() {
    return (
        <div>
            Bonjour! I'm child component 2.
            <ChildComp3 />
        </div>
    )
}

export default ChildComp2;
