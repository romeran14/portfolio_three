import { useGLTF } from "@react-three/drei"

export const RockSign = (props) => {

  const { scene } = useGLTF('/punk_rock_neon_sign/punk_rock_neon_sign.glb')
  return (
    <primitive {...props} object={scene} scale={1.75} position={[-11.5, 10, 10]} rotation={[0, Math.PI / 2, 0]} />
  )
}

useGLTF.preload('/punk_rock_neon_sign/punk_rock_neon_sign.glb')
