import { Billboard, Box, Image, Plane, Text3D } from '@react-three/drei'
import { useRef } from 'react'
import LocalBillboard from './Billboards/LocalBillboard'
import localFont from "./fonts/font.json";

// imgs
import paranormax from './assets/img/paranormax.png'
import rs from './assets/img/rsMobile.png'
import motionCam from './assets/img/motionCam.png'

const Skills = () => {
  
  return (
    <>
      {/* @ts-ignore */}
      <Text3D font={localFont} position={[-10, 5, -10]} bevelSegments={5} scale={.7} >
        Some of my work!
        <meshStandardMaterial color="#4f5242" />
      </Text3D>
      <LocalBillboard 
        position={[-15,1,-10]}
        img={paranormax}
        title={"Paranormax"}
        text={"A Craft CMS site with a custom theme and a react project connected to graphQL as the backend."}
        url={'https://kodev.be/web/'}
      />
      <LocalBillboard 
        position={[-8,1,-10]}
        img={rs}
        title={"RS mobile"}
        text={"A Laravel project to promote a mobile game. It has a full custom back office with a complete CRUD system for home banners, news posts, custom pages, donations, mailinglists and users."}
        url={'http://project.kodev.be/'}
      />
      <LocalBillboard 
        position={[-1,1,-10]}
        img={motionCam}
        title={"Motion-Cam"}
        text={"An IoT project: A Raspberry Pi with a camera detects when theres motion, starts recording saves the clip and sends registered users a push-notification. Created with Python, Firebase and React."}
        url={'https://youtu.be/blITzTevAjU'}
      />
    </>
  )
}

export default Skills