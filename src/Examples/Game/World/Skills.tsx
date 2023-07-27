import { Billboard, Image } from '@react-three/drei'
import html from './assets/img/html.png'
import css from './assets/img/css.png'
import js from './assets/img/js.png'
import php from './assets/img/php.png'
import laravel from './assets/img/laravel.png'
import mysql from './assets/img/mysql.png'
import node from './assets/img/node.png'
import react from './assets/img/react.png'


const Skills = () => {
  return (
    <group scale={.5}>
        <Billboard position={[-30,3,1]}>
            <Image 
                scale={2} 
                url={html}
                transparent={true} 
            />
        </Billboard>
        <Billboard position={[-30,3,-5]}>
            <Image 
                scale={2} 
                url={css}
                transparent={true} 
            />
        </Billboard>
        <Billboard position={[-30,3,-11]}>
            <Image 
                scale={2} 
                url={js}
                transparent={true} 
            />
        </Billboard>
        <Billboard position={[-25,3,1]}>
            <Image 
                scale={2} 
                url={php}
                transparent={true} 
            />
        </Billboard>
        <Billboard position={[-25,3,-5]}>
            <Image 
                scale={2} 
                url={mysql}
                transparent={true} 
            />
        </Billboard>
        <Billboard position={[-25,3,-11]}>
            <Image 
                scale={2} 
                url={laravel}
                transparent={true} 
            />
        </Billboard>
        <Billboard position={[-20,3,-2]}>
            <Image 
                scale={2} 
                url={node}
                transparent={true} 
            />
        </Billboard>
        <Billboard position={[-20,3,-8]}>
            <Image 
                scale={2} 
                url={react}
                transparent={true} 
            />
        </Billboard>
    </group>
  )
}

export default Skills