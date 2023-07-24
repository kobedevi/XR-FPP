import { GroupProps } from "@react-three/fiber";

import { GameWorld } from "Examples/Game/World/index";
import { SceneRapierFirstPersonLayout as Layout } from "Layouts/SceneRapierFirstPersonLayout";

/**
 * Page for Rapier World.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const GameWorldPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <GameWorld {...props}/>
    </Layout>
  );
};

export { GameWorldPage };
