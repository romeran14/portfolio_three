import { useGLTF } from "@react-three/drei"

export const Keyboard = (props) => {

  const { scene } = useGLTF('/keyboard/keyboard.glb')
  return (
    <primitive object={scene} scale={1 / 500} {...props} />
  )
}

useGLTF.preload('/keyboard/keyboard.glb')
