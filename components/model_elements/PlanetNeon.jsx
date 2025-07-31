import { useGLTF } from "@react-three/drei"

export const PlanetNeon = (props) => {

  const { nodes, materials }= useGLTF('/planet_neon/planet_neon.glb')

  return (
    <group {...props}  scale={0.5} position={[4, 1.5, 0]} rotation={[0, Math.PI / 2, 0]} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Material.003']}
        position={[0, 0.112, 1.09]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['Material.004']}
        rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  )
}

useGLTF.preload('/planet_neon/planet_neon.glb')
