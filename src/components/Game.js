import React, { useState } from "react";
import Board from './Board';
import { checkForWin } from '../helpers/checkForWin';

export const Game = () => {
    const [history, setHistory] = useState(Array(9).fill(null));
    const [turnNumber, setTurnNumber] = useState(0);
    const [player, setPlayer] = useState("X");

    const changePlayer = () => {
        const currentPlayer = player;
        if(currentPlayer === "X") {
            setPlayer = "O";
        } else {
            setPlayer = "X";
        }
    }

    const winner = checkForWin(history[turnNumber]);

    const handleClick = (index) => {
        const currentHistory = history.slice(0, turnNumber + 1);
        const current = currentHistory[turnNumber];
        const squares = [...current];

        //check if there is a winner or if the square has been clicked previously
        if(winner || squares[index]) return;
        squares[index] = player;
        setHistory([...currentHistory, squares]);
        setTurnNumber(currentHistory.length);
        changePlayer();
    };

}
