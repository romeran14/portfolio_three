

import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'

export function LinkedinIcon(props) {

  const { nodes, materials } = useGLTF('/3d_linkedin_logo.glb')
  

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI/2, 0, 0]}>
        <group position={[0, 3, 6]} scale={0.843}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.glossy_linkedin}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.glossy_putih}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3d_linkedin_logo.glb')
