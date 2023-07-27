import { Cylinder, Plane, MeshReflectorMaterial } from "@react-three/drei";
import { CuboidCollider, CylinderCollider, RigidBody } from "@react-three/rapier";
import { DoubleSide, Euler, MathUtils } from "three";

const PLANE_SIZE = 50;

const RapierWorldFloor = (props: any) => {
  const args = [PLANE_SIZE, PLANE_SIZE] as [number, number];
  const rotation = new Euler(MathUtils.degToRad(-90), 0, 0);

  return (
    <>
      <RigidBody colliders={false} type={"fixed"} name="void">
        <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[400, 400]}
            resolution={1024}
            mixBlur={1}
            mixStrength={15}
            depthScale={1}
            minDepthThreshold={0.85}
            color="#dbecfb"
            metalness={0.6}
            roughness={1} 
            mirror={0}            
          />
        </mesh>
        <CuboidCollider position={[0, -3.5, 0]} args={[50, 0.1, 50]} sensor />
      </RigidBody>
      <RigidBody
        type="fixed"
        position-y={-0.2}
        friction={.25}
      >
        <Plane args={args} rotation={rotation}>
          <meshBasicMaterial
            color={0xffffff}
            opacity={0}
            transparent
          />
        </Plane>
      </RigidBody>
    </>

  );
};

export { RapierWorldFloor };
