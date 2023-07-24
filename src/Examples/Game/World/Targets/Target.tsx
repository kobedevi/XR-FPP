import { Sphere } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

// @ts-ignore
const Target = ({ positionX }: Number) => {
    return (
        <RigidBody position={[positionX, 0 , 0]} colliders={"cuboid"}>
            <Sphere position={[3, 3, 0]} args={[0.5, 16, 16]} />
        </RigidBody>
    );
  };

  export default Target