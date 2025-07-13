import { useGLTF, useTexture } from "@react-three/drei"

export const PictureFrame = (props) => {

  const { nodes, materials } = useGLTF('/picture_frame/picture_frame.glb')
  const terryTx = useTexture('/picture_frame/terry.jpg')
  //console.log("MATERIALS", materials)
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.heart_Default_0.geometry}
          material={materials.Default}
          position={[-26.757, -24.084, 1.356]}
          rotation={[-3.133, -0.031, 2.782]}
          scale={[3.436, 3.424, 1.127]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pictureframe_back_Back_0.geometry}
          material={materials.Back}
          position={[0, 27.086, -0.123]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[24.707, 43.923, 0.371]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Picture_Frame_Frame_0.geometry}
          material={materials.Frame}
          position={[0, 27.086, -0.101]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[27.573, 49.018, 1.355]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Picture_Picture_0.geometry}
          material={materials.Picture}
          position={[0, 27.116, 0.41]}
          scale={[36.246, 20.4, 20.4]}
        >
          <meshMatcapMaterial map={terryTx} />
        </mesh>
      </group>
    </group>
  )
}
useGLTF.preload('/picture_frame/picture_frame.glb')
