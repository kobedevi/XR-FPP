import { useState } from 'react'
import { Box, Image, Text } from '@react-three/drei'

const LocalBillboard = ({position, title, text, url="", img}: {position:[number, number, number], title:String, text:String, url:String, img:any}) => {

  const [opacity, setOpacity] = useState(1)

  const handlePointerOver = () => {
    setOpacity(0);
  }

  const handlePointerOut = () => {
    setOpacity(1)
  }

  const openLink = () => {
    window.open(url.toString(), "_blank");
  }

  return (
    <>
      <group name="billboard" position={position}>
        <group name="legs">
          <Box args={[.2, .8, .25]}>
            <meshStandardMaterial color="#4f3a00" />
          </Box>
          <Box args={[.2, .8, .25]} position={[3, 0, 0]}>
            <meshStandardMaterial color="#4f3a00" />
          </Box>
        </group>
        <group name="board">
          <group name="back">
            <Box args={[16/3.2, 9/3.2, .4]} position={[1.5,(9/3/2),-0.05]}>
              <meshStandardMaterial color="#ece8e7" />
            </Box>
          </group>
          <group name="sides">
            <Box args={[16/3.2, .1, .2]} position={[1.5,2.855,.2]}>
              <meshStandardMaterial color="#ece8e7" />
            </Box>
            <Box args={[16/3.2, .1, .2]} position={[1.5,0.15,.2]}>
              <meshStandardMaterial color="#ece8e7" />
            </Box>

            <Box args={[.1,  9/3.2, .2]} position={[-.95,(9/3/2),.2]}>
              <meshStandardMaterial color="#ece8e7" />
            </Box>
            <Box args={[.1,  9/3.2, .2]} position={[3.95,(9/3/2),.2]}>
              <meshStandardMaterial color="#ece8e7" />
            </Box>
          </group>
        </group>
        <group name="main" scale={.9}>
          <Image 
            scale={[16/3,9/3]} 
            url={img}
            position={[1.65,1.65,.3]} 
            transparent={true} 
            opacity={opacity} 
            onPointerOver={handlePointerOver} 
            onPointerOut={handlePointerOut}
          />
          {opacity === 0 && (
            <group name='text' onClick={openLink}>
              <Text 
                anchorY={"middle"}
                fontSize={.7}
                color={"black"}
                position={[1.7,2.4,.32]}
              >
                {title.toUpperCase()}
              </Text>
              <Text 
                anchorY={"top"}
                anchorX={"left"}
                maxWidth={4.5}
                fontSize={.2}
                color={"black"}
                position={[-.6,1.8,.32]}
              >
                {text}
                {'\n\nOPEN >'}
              </Text>
            </group>
          )}
        </group>
      </group>
    </>
  )
}

export default LocalBillboard