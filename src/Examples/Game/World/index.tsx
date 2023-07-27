import { GroupProps } from "@react-three/fiber";

import { RapierWorldFloor as Floor } from "Examples/Game/World/Floor"
import { RapierWorldPlayer as Player } from "Examples/Game/World/Player";
import { Donut } from "Examples/Game/World/Donut";
import MovingTarget from "./Targets/Targets";
import Sign from "./Sign";
import Experience from "./Experience";
import { Terrain } from "./Terrain";
import Skills from "./Skills";


const GameWorld = (props: GroupProps) => {
  return (
    <group name="World" {...props}>
      <Player/>
      <Terrain scale={4} position={[0,-0.3,0]}/>
      <Floor/>
      <MovingTarget/>
      <Sign position={[-16,1.5,-2.5]}/>
      <Skills/>
      <Experience/>
      <Donut friction={5} position={[-17.5, 1.5, -20]} scale={3} rotation={[0,0,-.5]}/>
    </group>
  );
};

export { GameWorld };
