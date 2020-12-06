import * as React from 'react';

interface Props {
    counter: number;
    handleClick: () => void;
}

const Child: React.FC<Props> = ({ counter, handleClick }) => {
    return (
        <main>
            <p>Counter : {counter}</p>
            <button onClick={handleClick}>increment</button>
        </main>
    );
}

export default Child;