import { Box, Text3D  } from '@react-three/drei'
import React from 'react'
import localFont from "./fonts/font.json";
import { BufferAttribute, BufferGeometry } from 'three';

const Sign = ({position}: {position: [number, number, number]}) => {

  return (
    <group name="sign" position={position}>
        <Box args={[.2, 5, .2]}>
            <meshStandardMaterial color="#4f3a00" />
        </Box>
        <group>
            <Box args={[2, .7, .2]} position={[0,1.8,.2]}>
                <meshStandardMaterial color="#ece8e7" />
            </Box>
            {/* @ts-ignore */}
            <Text3D font={localFont} position={[-.6,1.6,.3]} bevelSegments={5} scale={.4} >
                Skills
                <meshStandardMaterial color="#4f5242" />
            </Text3D>
        </group>
    </group>
  )
}

export default Sign