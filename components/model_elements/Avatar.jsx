import { useRef, useEffect, useMemo } from 'react' // Add useMemo
import { useAnimations,  useGLTF } from '@react-three/drei'
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';

export function Avatar(props) {
  const meshRef = useRef()
  const { scene, animations } = useGLTF('/rome_typing/rome-typing.glb')

  // Use useMemo to clone the scene only once per component instance
  const clonedScene = useMemo(() => {
    // This is a common pattern to clone a GLTF scene for multiple uses
    // SkeletonUtils.clone is crucial for rigged models
    return SkeletonUtils.clone(scene);
  }, [scene]);

  // If cloning breaks animations, you might need to re-link the skeleton here
  // This can be complex depending on the GLTF structure.

  const { actions } = useAnimations(animations, meshRef) // actions still refer to the original animations, will apply to cloned mesh

  useEffect(() => {
    if (actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  return (
    <group ref={meshRef} {...props} dispose={null}>
      <primitive object={clonedScene} />
    </group>
  )
}

useGLTF.preload('/rome_typing/rome-typing.glb')
