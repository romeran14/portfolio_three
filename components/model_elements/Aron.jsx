import { useGLTF } from "@react-three/drei"

export const Aron = (props) => {

  const { scene, animations, materials } = useGLTF('/aron/aron.glb')
  return (
    <primitive object={scene} scale={0.4} position={[-6, 0, 2]} rotation={[0, Math.PI - Math.PI / 8, 0]} />
  )
}

useGLTF.preload('/aron/aron.glb')
