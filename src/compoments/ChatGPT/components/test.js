import React, { useState } from 'react';

function myFunction() {
    // some logic to generate a value
    return 'hello world';
}

function MyComponent() {
    const [myState, setMyState] = useState(() => myFunction());

    function handleClick() {
        // update the state with a new value
        setMyState('new value');
    }

    return (
        <div>
            <p>{myState}</p>
            <button onClick={handleClick}>Update state</button>
        </div>
    );
}
