import React from 'react';
import {Square, square} from './Square';

export const Board = ({squares, onClick}) => {
    <div className="board">
        {squares.map((square, index) => (
            <Square key={index} value={square} onClick={() => onClick(index)} />
        ))}
    </div>
}