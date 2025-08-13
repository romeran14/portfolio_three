

import { useGLTF } from '@react-three/drei'
import { useCursor } from '@react-three/drei';
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'


export function LinkedinIcon(props) {
	
	const { nodes, materials } = useGLTF('/3d_linkedin_logo.glb')

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
      window.open("https://www.linkedin.com/in/romeran-rodriguez-pacheco-93b844156", '_blank');
    }

    // useCursor necesita un booleano, así que pasamos una referencia booleana simple
    // const isHovered = useState(false);
    // useCursor(isHovered.current);

	return (
		<group 
           {...props} dispose={null}
        >
			<group
                onClick={redirectTo} 
                ref={ref} rotation={[Math.PI/2, 0, 0]} position={[0, 3, 6]} scale={0.84}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_4.geometry}
					material={materials.glossy_linkedin}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_5.geometry}
					material={materials.glossy_putih}
				/>
			</group>

		</group>
	)
}

useGLTF.preload('/3d_linkedin_logo.glb')
