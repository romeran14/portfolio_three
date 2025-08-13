
import { useGLTF } from "@react-three/drei"
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function GithubIcon(props) {
  const { nodes, materials } = useGLTF('/3d_github_logo.glb')

    const ref = useRef()
    // Define la velocidad de rotación una sola vez
    const rotationSpeed = 0.5;

    // useFrame se ejecuta en cada fotograma
    useFrame(({ clock }) => {

        // Contrarresta la rotación del grupo en cada uno de los íconos
        // Asegúrate de que las referencias existan antes de intentar usarlas
        if (ref.current) {
            ref.current.rotation.y = -clock.elapsedTime * rotationSpeed + Math.PI;
        }

    });

    const redirectTo = () => {
      window.open("https://github.com/romeran14", '_blank');
    }
  return (
    <group  {...props}  dispose={null}>
      <group  onClick={redirectTo}  ref={ref} position={[-0.055, 2.945, 6.336]} rotation={[Math.PI / 2,0, 0]} scale={28.364}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.glossy_putih}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.github}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/3d_github_logo.glb')