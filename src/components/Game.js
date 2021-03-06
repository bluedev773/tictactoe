import React, { useState } from "react";
import Board from './Board';
import { checkForWin } from '../helpers/checkForWin';

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [turnNumber, setTurnNumber] = useState(0);
    const [player, setPlayer] = useState("X");
    const winner = checkForWin(history[turnNumber]);

    //change player
    const changePlayer = () => {
        const currentPlayer = player;
        if(currentPlayer === "X") {
            setPlayer("O");
        } else {
            setPlayer("X");
        }
    }

    //reset to new game
    const reset = () => {
        setHistory([Array(9).fill(null)]);
        setTurnNumber(0);
        setPlayer("X");
    }

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

    return (
        <>
            <h1>Tic Tac Toe</h1>
            <Board squares={history[turnNumber]} onClick={handleClick} />
            <h2>{winner ? `${winner} wins!` : `${player} it is your turn!`}</h2>
            <button className="resetButton" onClick={reset}>Reset</button>
        </>
        
    );
};

export default Game;
