import {
  CubeCamera,
  OrbitControls,
  PerspectiveCamera,
  PointerLockControls,
  useGLTF,
  useKeyboardControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RoundCuboidCollider, RigidBody, vec3 } from "@react-three/rapier";
import { useRef, useState } from "react";
import { Car } from "./Car";
import { BoxGeometry, Euler, Mesh, MeshBasicMaterial, Quaternion } from "three";
import donut from "./assets/donut.glb";
import Projectile from "./Projectile";


const MOVEMENT_SPEED = 2;
const MAX_VEL = 4;

const RapierWorldPlayer = (props: any) => {


  const moveBackwardOn = useKeyboardControls((state) => state.moveBackward);
  const moveForwardOn = useKeyboardControls((state) => state.moveForward);
  const moveLeftOn = useKeyboardControls((state) => state.moveLeft);
  const moveRightOn = useKeyboardControls((state) => state.moveRight);
  const shoot = useKeyboardControls((state) => state.shoot);
  

  const playerRef = useRef<any>(null!);
  // const pointerRef = useRef<any>(null!);
  const modelRef = useRef<any>(null!);

  const [projectiles, setProjectiles] = useState([]);

  // @ts-ignore
  const { scene: donutScene } = useGLTF(donut, true);

  const lastExecutionTimeRef = useRef(0);
  const executionCountRef = useRef(0);
  const maxExecutions = 1; // Change this value to set the maximum number of executions per "time unit" 
  
  useFrame(({camera}) => {
    const impulse = {x:0, y:0, z:0};
    // const camera = pointerRef.current.getObject();
    const player = playerRef.current;
    const linvel = playerRef['current'].linvel();
    
    // Match Camera position to Player position.
    camera.position.copy(player.translation());
    camera.position.y += 10.25; // 1.75m
    camera.position.z += 8; // 1.75m
    camera.position.x += 8; // 1.75m
    camera.rotation.y = 0.55;
    camera.rotation.z = 0.55;
    camera.rotation.x = -0.825;
    
    // Change rotation of model
    let changeRotation = false;
    
    const currentTime = window.performance.now();
    const elapsedTimeSinceLastExecution = currentTime - lastExecutionTimeRef.current;
    const timeBetweenExecutions = 500 / maxExecutions;


    // Reset timer
    if(elapsedTimeSinceLastExecution >= timeBetweenExecutions) {
      executionCountRef.current = 0;
      lastExecutionTimeRef.current = currentTime;
    }
    // Shoot and increase executed
    if (shoot && executionCountRef.current < maxExecutions) {
      // Call the function and increment the counter
      const carPosition = player.translation()
      carPosition['x'] += 1;
      carPosition['y'] += 1; 

      const geometry = new BoxGeometry(.2, .2, .2)
      const material = new MeshBasicMaterial({color: 0xffff00})
      const projectile = new Mesh(geometry, material);

      // @ts-ignore
      setProjectiles((prev) => [...prev, {projectile, carPosition}]);
      executionCountRef.current++;
    }
    // Move Player.
    if(moveRightOn && linvel.x < MAX_VEL) {
      impulse.x += MOVEMENT_SPEED;
      changeRotation = true;
    }
    if(moveLeftOn && linvel.x > -MAX_VEL) {
      impulse.x -= MOVEMENT_SPEED;
      changeRotation = true;
    }
    if(moveForwardOn && linvel.z > -MAX_VEL) {
      impulse.z -= MOVEMENT_SPEED;
      changeRotation = true;
    }
    if(moveBackwardOn && linvel.z < MAX_VEL) {
      impulse.z += MOVEMENT_SPEED;
      changeRotation = true;
    }
    if(playerRef['current'] !== null) {
      playerRef.current.applyImpulse(impulse, true);
    }
    if(changeRotation) {
      const angle = Math.atan2(-linvel.x, -linvel.z);
      playerRef.current.setRotation(
        new Quaternion().setFromEuler(new Euler(0, angle , 0)), true
      );
    }
  });

  const resetPosition = () => {
    playerRef.current.setTranslation(vec3({ x: 0, y: 0, z: 0 }));
    playerRef.current.setLinvel(vec3({ x: 0, y: 0, z: 0 }));    
  };

  return (
    <>
      {projectiles.map((projectile, index) => {
        return (
          <Projectile key={index} position={[projectile['carPosition']['x'],projectile['carPosition']['y'],projectile['carPosition']['z']]}/>
        )
      })}
      <group name="Player" position={[0, 3, 0]} rotation={[0, 0 , 0]} >
        {/* <PointerLockControls ref={pointerRef} selector="#start"/> */}
 
        {/* reset if it touches "void plane" */} 
        <RigidBody ref={playerRef} colliders={false} scale={[.5,.5,.5]} enabledRotations={[false,false,false]} rotation={[0,0,0]} onIntersectionEnter={({other}) => {
          if(other.rigidBodyObject !== undefined) {
            if(other.rigidBodyObject.name === "void") {
              resetPosition();
            }
          }
        }}>

          <RoundCuboidCollider args={[2,4,3.3, .3]} position={[0, 3, 0]} rotation={[0,0,0]}/>
          <group name="model" ref={modelRef}>
            <Car position={[0, -1, 0]} rotation={[0,Math.PI,0]} enabledRotations={[false,false,false]}/>
          </group>
        </RigidBody>

      </group>
    </>
  );
};

export { RapierWorldPlayer };
