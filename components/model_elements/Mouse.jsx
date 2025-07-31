import { useGLTF } from "@react-three/drei"

export const Mouse = (props) => {

  const { materials, nodes } = useGLTF('/mouse/mouse.glb')
  
  return (
    <group scale={13} position={[-3.25, 0, -1.5]} rotation={[0, 3.2, 0]} {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface5_MAT_Plastic_0.geometry}
          material={materials.MAT_Plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface2_MAT_Emission_0.geometry}
          material={materials.MAT_Emission}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BOTON_CENTRAL_MAT_Plastic_0.geometry}
          material={materials.MAT_Plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface4_MAT_Details_0.geometry}
          material={materials.MAT_Details}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/mouse/mouse.glb')
