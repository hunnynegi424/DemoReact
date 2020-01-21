import React from 'react';
import Profile from './ChildComp2';

function ChildComp1() {
    return (
        <div>
            <div>
                <h3>Greetings</h3>
                <p>Hey, I'm Harvinder Negi.</p>
            </div>
            <div>
                <h4>Profile:</h4>
                <Profile />
            </div>
        </div>
    )
}

export default ChildComp1;
