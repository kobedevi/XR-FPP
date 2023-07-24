/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 car.glb
*/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import car from "./assets/car.glb"


export const Car = (props) => {
  const { nodes, materials } = useGLTF(car)
  return (
    <group {...props} dispose={null}>
      <group position={[0.065, 1.072, -0.004]}>
        <mesh geometry={nodes.Circle007.geometry} material={materials['donut glaze.001']} />
        <mesh geometry={nodes.Circle007_1.geometry} material={materials['Donut base.001']} />
        <mesh geometry={nodes.Circle007_2.geometry} material={materials['Auto roos.001']} />
        <mesh geometry={nodes.Circle007_3.geometry} material={materials['Auto wit.001']} />
        <mesh geometry={nodes.Circle007_4.geometry} material={materials['ruit.001']} />
        <mesh geometry={nodes.Circle007_5.geometry} material={materials['Metaal.001']} />
        <mesh geometry={nodes.Circle007_6.geometry} material={materials['lamp.001']} />
        <mesh geometry={nodes.Circle007_7.geometry} material={materials['bord.001']} />
        <mesh geometry={nodes.Circle007_8.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Circle007_9.geometry} material={materials['afdak blauw.001']} />
        <mesh geometry={nodes.Circle007_10.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Circle007_11.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Circle007_12.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Circle007_13.geometry} material={materials['Material.014']} />
      </group>
      <group position={[0, 0.272, -2.033]}>
        <mesh geometry={nodes.Circle006.geometry} material={materials['Banden.001']} />
        <mesh geometry={nodes.Circle006_1.geometry} material={materials['Metaal.001']} />
      </group>
      <group position={[0, 5.449, -0.738]}>
        <mesh geometry={nodes.Circle005.geometry} material={materials['donut back.001']} />
        <mesh geometry={nodes.Circle005_1.geometry} material={materials['donut glaze.001']} />
        <mesh geometry={nodes.Circle005_2.geometry} material={materials['donut sprinkles.001']} />
        <mesh geometry={nodes.Circle005_3.geometry} material={materials['Donut base.001']} />
      </group>
      <group position={[0, 1.424, 2.053]}>
        <mesh geometry={nodes.Circle002.geometry} material={materials['Auto roos.001']} />
        <mesh geometry={nodes.Circle002_1.geometry} material={materials['Auto wit.001']} />
        <mesh geometry={nodes.Circle002_2.geometry} material={materials['Metaal.001']} />
        <mesh geometry={nodes.Circle002_3.geometry} material={materials['spiegels.001']} />
      </group>
      <group position={[-0.981, 3.264, 1.27]} scale={0.624}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.017']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.003']} />
      </group>
    </group>
  )
}

useGLTF.preload(car)
