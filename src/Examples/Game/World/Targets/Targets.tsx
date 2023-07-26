import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';
import { RigidBody, RapierRigidBody, vec3, CuboidCollider } from '@react-three/rapier';
import { useGameStore } from '../store';

const MovingTarget = () => {
  const rigidBody = useRef<RapierRigidBody>(null);

  const {setScore} = useGameStore((state: { setScore: any;}) => ({
    setScore: state.setScore,
}));

  let direction = 125;

  useFrame(() => {
    if (rigidBody.current) {
      const position = vec3(rigidBody.current.translation());
      if(direction > 500) {
        direction = 0;
      }
      if(direction > 250) {
        position.setZ(position.z+.05);
      }
      if(direction < 250) {
        position.setZ(position.z-.05);
      }
      rigidBody.current.setTranslation(position, true)
      direction++;
    }
  })

  return (
    <RigidBody name="target" ref={rigidBody} type="fixed" position={[10,.5,0]} enabledRotations={[false,false,false]} onIntersectionEnter={({other}) => {
      if(other.rigidBodyObject !== undefined) {
        if(other.rigidBodyObject.name === "projectile") {
          setScore();
        }
      }
    }}>
      <mesh>
        <boxBufferGeometry args={[1,1,1]}/>
        <meshStandardMaterial />
        <CuboidCollider scale={1} args={[.5, .5, .5]} sensor />
      </mesh>
    </RigidBody>
  );
};

export default MovingTarget;