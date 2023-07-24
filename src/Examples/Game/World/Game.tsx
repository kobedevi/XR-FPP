import { Cylinder, OrbitControls } from '@react-three/drei'
import { CylinderCollider, RigidBody } from '@react-three/rapier'
import React from 'react'
// import CharacterController from './CharacterController'

const Game = () => {
  
  return (
    <>
      <OrbitControls/>
      <ambientLight intensity={1} />
      <directionalLight position={[5,5,5]} intensity={.8} castShadow color={"#9e69da"}/>
    </>
  )
}

export default Game