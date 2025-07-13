import { useGLTF } from "@react-three/drei"

export const Mouse = (props) => {

  const { scene, animations, materials } = useGLTF('/mouse/mouse.glb')
  return (
    <primitive object={scene} scale={13} position={[-3.25, 0, -1.5]} rotation={[0, 3.2, 0]} />
  )
}

useGLTF.preload('/mouse/mouse.glb')
