import { useGLTF, useTexture } from "@react-three/drei"

export const Monitor = (props) => {

  const { nodes, materials } = useGLTF('/monitor/monitor.glb')
  const screenTxt = useTexture('/textures/monitor_screen.jpg')

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screen_Display_0.geometry}
          material={materials.Display}
          scale={100}
        >
          <meshMatcapMaterial map={screenTxt} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Main_low_Base_0.geometry}
          material={materials.Base}
          position={[0, -10.552, -5.016]}
          scale={100}
        />
      </group>
    </group>
  )
}
useGLTF.preload('/monitor/monitor.glb')
