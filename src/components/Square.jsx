import React from 'react';

//create the small square component that will make up the game board
export const Square = ({value, onClick}) => {
    return (
        <button className="board-square" onClick={onClick}>
            {value}
        </button>
    )
}