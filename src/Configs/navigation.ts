import { NavigationItem } from "Types/NavigationItem";

export namespace NAVIGATION {
  export enum PATH {
    PHYSICS_RAPIER_WORLD = "rapier/world",
    PORTFOLIO = "portfolio/world",
    GAME = "game/world",
  }

  export const ITEMS: Array<NavigationItem> = [
    {
      label: "Game",
      to: PATH.GAME,
    }
  ];
}
