import React from 'react'
import { gameStates, useGameStore, } from './store'
import { KEYBINDINGS } from 'Configs/keybindings';

const Menu = () => {
    const {setControlsWASD, setControlsZQSD, startGame, gameState} = useGameStore((state: { startGame: any; gameState: any; setControlsWASD: any; setControlsZQSD: any; }) => ({
        startGame: state.startGame,
        gameState: state.gameState,
        setControlsWASD: state.setControlsWASD,
        setControlsZQSD: state.setControlsZQSD,
    }));
  return (
    <div className={`menu${gameState !== gameStates.MENU ? " menuHide" : ""}`}>
        <h1>Extended Reality - FPP Kobe Devillé</h1>
        <button id="start" onClick={(e) => startGame()}>Start game</button>
        <div>
            <h3>Controls: </h3>
            <h4 style={{textAlign: "center"}}>space to shoot: </h4>
            <button onClick={(e) => setControlsWASD()} style={{marginRight: "8px"}}>QWERTY</button>
            <button onClick={(e) => setControlsZQSD()}>AZERTY</button>
        </div>
    </div>
  )
}

export default Menu