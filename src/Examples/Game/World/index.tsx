import { GroupProps } from "@react-three/fiber";

import { RapierWorldFloor as Floor } from "Examples/Game/World/Floor"
import { RapierWorldPlayer as Player } from "Examples/Game/World/Player";
import { Donut } from "Examples/Game/World/Donut";
import MovingTarget from "./Targets/Targets";
import Sign from "./Sign";
import Skills from "./Skills";


const GameWorld = (props: GroupProps) => {
  return (
    <group name="World" {...props}>
      <Player/>
      <Floor/>
      <MovingTarget />
      <Sign position={[-20,2.5,-20]}/>
      <Skills />
      <Donut position={[-3, 0, 0]}/>
    </group>
  );
};

export { GameWorld };
