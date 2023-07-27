import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { folder, Leva, useControls } from "leva";
import { Suspense, useEffect, useState } from "react";

import { Helpers } from "Components/Helpers";
import { Lighting } from "Components/Lighting";
import { KEYBINDINGS } from "Configs/keybindings";
import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaCanvas } from "Settings/Leva/Canvas";
import { SettingsLevaPhysics } from "Settings/Leva/Physics";
import { LayoutProps } from "Types/LayoutProps";
import Menu from "Examples/Game/World/Menu";
import { useGameStore } from "Examples/Game/World/store";

/**
 * Layout for a scene with Rapier physics engine for First Person view.
 *
 * @param {LayoutProps} props
 * @returns {JSX.Element}
 */



const SceneRapierFirstPersonLayout = ({
  children,
}: LayoutProps): JSX.Element => {

  
  const { flat, frameloop, linear, shadows } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      Canvas: folder(
        {
          flat: SettingsLevaCanvas.flat(),
          frameloop: SettingsLevaCanvas.frameloop(),
          linear: SettingsLevaCanvas.linear(),
          shadows: SettingsLevaCanvas.shadows(true),
        },
        Settings.folder(LEVA.ORDER.CANVAS)
      ),
    },
    Settings.folder(LEVA.ORDER.GENERAL)
  );
  const { gravity, paused, showDebug } = useControls(
    LEVA.SCHEMA.PHYSICS,
    {
      gravity: SettingsLevaPhysics.gravity(),
      paused: SettingsLevaPhysics.paused(),
      showDebug: SettingsLevaPhysics.showDebug(true),
    },
    Settings.folder(LEVA.ORDER.PHYSICS)
  );
    
  const {getControls, getGameState, getScore} = useGameStore((state: { getGameState: any; getControls: any; getScore: any; }) => ({
    getControls: state.getControls,
    getGameState: state.getGameState,
    getScore: state.getScore
  }));

  const [controls, setControls] = useState(getControls())

  useEffect(() => {
    // detect change in controls
    const temp = getControls();
    if(temp.length > 0) {
      setControls(temp)
    }
  }, [getControls()])



  return (
    <>
      <Canvas
        camera={{position: [0,6,14], fov: 50 }}
        flat={flat}
        frameloop={frameloop}
        linear={linear}
        orthographic={false}
        shadows={shadows}
      >
        <color attach="background" args={["#dbecfb"]} />
        <Suspense>
          <Helpers />
          <Lighting />
          {/* DUMB WORKAROUND FOR UPDATING CONTROLS, old method stopped working */}
          {controls[2]?.keys[1] === 'KeyQ' && (
            <KeyboardControls map={controls}>
              <Physics
                debug={true}
                colliders={undefined}
                gravity={[gravity.x, gravity.y, gravity.z]}
                paused={paused}
                timeStep="vary"
                updatePriority={undefined}
              >
                {children}
              </Physics>
            </KeyboardControls>
          )}
          {controls[2]?.keys[1] === 'KeyA' && (
            <KeyboardControls map={controls}>
              <Physics
                debug={true}
                colliders={undefined}
                gravity={[gravity.x, gravity.y, gravity.z]}
                paused={paused}
                timeStep="vary"
                updatePriority={undefined}
              >
                {children}
              </Physics>
            </KeyboardControls>
          )}
          {getControls().length === 0 && (
            <KeyboardControls map={KEYBINDINGS.QWERTY}>
            <Physics
              debug={true}
              colliders={undefined}
              gravity={[gravity.x, gravity.y, gravity.z]}
              paused={paused}
              timeStep="vary"
              updatePriority={undefined}
            >
              {children}
            </Physics>
          </KeyboardControls>
          )}
        </Suspense>
      </Canvas>
      <div className="playerScore">
        <h2>Score: {getScore()}</h2>
      </div>
      <Menu/>
      <Leva
        collapsed={false}
        fill={false}
        flat={false}
        hidden={false}
        oneLineLabels={true}
        titleBar={true}
      />
    </>
  );
};

export { SceneRapierFirstPersonLayout };
