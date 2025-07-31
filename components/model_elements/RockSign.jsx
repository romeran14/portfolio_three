import { useGLTF } from "@react-three/drei"

export const RockSign = (props) => {

  const { nodes, materials } = useGLTF('/punk_rock_neon_sign/punk_rock_neon_sign.glb')

  materials.Yellow.emissiveIntensity = 2
  return (
    
    <group  scale={1.75} position={[-18,2 , 0]} rotation={[0, Math.PI / 2, 0]} {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert_Yellow_0.geometry}
          material={materials.Yellow}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/punk_rock_neon_sign/punk_rock_neon_sign.glb')
