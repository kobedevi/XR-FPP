import React from 'react'
import * as THREE from 'three'
import { Billboard, Plane, Image, Html } from '@react-three/drei'
import { useLoader } from 'react-three-fiber'
import img from "../assets/img/react.png"

const LocalBillboard = ({position}: {position:[number, number, number]}) => {

  const texture = useLoader(THREE.TextureLoader, img)

  return (
    <Billboard follow position={position}>
      {/* <Plane args={[3, 2]} material-color="white"/> */}
      {/* <meshBasicMaterial attach="material" map={texture} /> */}
      <mesh position={[0, 2, -5]}>
        <planeGeometry args={[3, 2]} />
        <meshBasicMaterial>
          {/* Aplly image as standard material? */}
          {/* https://eriksachse.medium.com/react-three-fiber-lets-create-a-dice-b83f322d28ea */}
        </meshBasicMaterial>
      </mesh>
    </Billboard>
  )
}

export default LocalBillboard