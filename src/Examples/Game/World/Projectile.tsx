import { RigidBody } from '@react-three/rapier';
import { useRef, useState } from "react";
import donut from "./assets/donut.glb";
import { useGLTF } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';

const Projectile = ({position}: any) => {

    // @ts-ignore
    const { scene: donutScene } = useGLTF(donut, true);
    const projectileRef = useRef<any>(null!);
    const clone = donutScene.clone();

    const [impulseApplied, setImpulseApplied] = useState(false);
    const [frameCount, setFrameCount] = useState(0);

    useFrame(() => {
        if (!impulseApplied && projectileRef.current && frameCount < 2) {
            const impulseVector = {x:.07, y:0, z:0}; // The direction of the impulse
            if(projectileRef.current !== null){
                projectileRef.current.applyImpulse(impulseVector, true);
            }
        }
        if(frameCount === 2 && projectileRef.current) {
            setImpulseApplied(true);
            setFrameCount(frameCount+1);
        }
        if(frameCount <2  && projectileRef.current) {
            setFrameCount(frameCount+1);
        }
        });

    return (
        <RigidBody ref={projectileRef} name="projectile" position={position}>
            <primitive object={clone}/>
        </RigidBody>
    )
}

export default Projectile