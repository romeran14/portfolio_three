import { useGLTF } from "@react-three/drei"

export const Chair = (props) => {

  const { scene, animations, materials } = useGLTF('/chair/chair.glb')
  return (
    <primitive object={scene} scale={1 / 10} position={[-10.70, -7, -6]} rotation={[0, 4.7, 0]} />
  )
}

useGLTF.preload('/chair/chair.glb')
