import { useGLTF } from "@react-three/drei"

export const PlanetNeon = (props) => {

  const { scene } = useGLTF('/planet_neon/planet_neon.glb')
  return (
    <primitive {...props} object={scene} scale={0.5} position={[13, 10, 10]} rotation={[0, Math.PI / 2, 0]} />
  )
}

useGLTF.preload('/planet_neon/planet_neon.glb')
