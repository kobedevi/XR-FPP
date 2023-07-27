import React from 'react'
import { gameStates, useGameStore, } from './store'
import { KEYBINDINGS } from 'Configs/keybindings';
import sound from "./assets/engine-6000.mp3"

const Menu = () => {
    const {setControlsWASD, setControlsZQSD, startGame, gameState} = useGameStore((state: { startGame: any; gameState: any; setControlsWASD: any; setControlsZQSD: any; }) => ({
        startGame: state.startGame,
        gameState: state.gameState,
        setControlsWASD: state.setControlsWASD,
        setControlsZQSD: state.setControlsZQSD,
    }));


    const setSound = () => {
      const audio = new Audio(sound);
      audio.loop = true;
      audio.volume = .15;
      audio.preservesPitch = false;
      audio.playbackRate = 0.5;
      audio.play();
      console.log(audio);
    }

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
        <div>
          <button onClick={(e) => setSound()}>Toggle sound</button>
        </div>
    </div>
  )
}

export default Menu