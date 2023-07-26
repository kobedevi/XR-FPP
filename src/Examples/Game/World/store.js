import create from "zustand"
import { subscribeWithSelector } from "zustand/middleware";
import { KEYBINDINGS } from "Configs/keybindings";

export const gameStates = {
    MENU: "MENU",
    GAME: "GAME",
}; 

export const useGameStore = create(
    subscribeWithSelector((set, get) => ({
      currentScore: 0,
      gameState: gameStates.MENU,
      controls: [],
      startGame: () => {
        set({currentScore: 0, gameState: gameStates.GAME, controls: get().controls.length > 0 ? get().controls : []})
      },
      setControlsWASD: () => {
        set({controls: KEYBINDINGS.QWERTY})
      },
      setControlsZQSD: () => {
        set({controls: KEYBINDINGS.AZERTY})
      },
      getControls: () => {
        return get().controls
      },
      getGameState: () => {
        return get().gameState
      },
      setScore: () => {
        set((state) => ({
          currentScore: state.currentScore + 1,
        }));
      },
      getScore: () => {
        return get().currentScore;
      },
      goToMenu: () => {
        set({
          gameState: gameStates.MENU,
        });
      },
    }))
  );