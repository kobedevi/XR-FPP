import { GroupProps } from "@react-three/fiber";
import Game from "Examples/Game/World/Game";

import { RapierWorldFloor as Floor } from "Examples/Game/World/Floor"
import { RapierWorldPlayer as Player } from "Examples/Game/World/Player";
import { Donut } from "Examples/Game/World/Donut";
import Targets from "./Targets/Targets";
import MovingTarget from "./Targets/Targets";


const GameWorld = (props: GroupProps) => {
  return (
    <group name="World" {...props}>
      <Player/>
      <Floor/>
      <MovingTarget />
      <Donut position={[-3, 0, 0]}/>
    </group>
  );
};

export { GameWorld };
