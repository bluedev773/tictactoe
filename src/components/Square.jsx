import React from 'react';

//create the small square component that will make up the game board
const Square = ({value, onClick}) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;