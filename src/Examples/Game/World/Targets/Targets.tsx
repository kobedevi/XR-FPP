import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';
import { RigidBody, RapierRigidBody, vec3, CuboidCollider } from '@react-three/rapier';
import { useGameStore } from '../store';
import { Donutbox } from '../Donutbox';

const MovingTarget = () => {
  const rigidBody = useRef<RapierRigidBody>(null);

  const {setScore} = useGameStore((state: { setScore: any;}) => ({
    setScore: state.setScore,
  }));

  let [hitEdge,setHitEdge] = useState(false)

  useFrame(({clock}) => {
    if (rigidBody.current) {
      const position = vec3(rigidBody.current.translation());
      if(position.z < -10) {
        setHitEdge(false)
      }
      if(position.z > 10) {
        setHitEdge(true)
      }
      if(hitEdge === false) {
        position.setZ(position.z+.05);
      }
      if(hitEdge === true) {
        position.setZ(position.z-.05);
      }
      rigidBody.current.setTranslation(position, true)
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
      <boxBufferGeometry args={[1,1,1]}/>
      <CuboidCollider scale={1} args={[.5, .5, .5]} sensor />
      <Donutbox scale={1}/>

    </RigidBody>
  );
};

export default MovingTarget;