import { useGLTF } from "@react-three/drei"

export const Table = (props) => {

  const { scene, animations, materials } = useGLTF('/table/table.glb')
  return (
    <primitive {...props} object={scene} scale={1 / 8} position={[4, -0.15, -5.5]} />
  )
}

useGLTF.preload('/table/table.glb')
