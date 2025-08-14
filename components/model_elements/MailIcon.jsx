
import { useGLTF } from '@react-three/drei'
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function MailIcon(props) {

  const { nodes, materials } = useGLTF('/mail_icon.glb')

    const ref = useRef()
    // Define la velocidad de rotación una sola vez
    const rotationSpeed = 0.5;

    // useFrame se ejecuta en cada fotograma
    useFrame(({ clock }) => {

        // Contrarresta la rotación del grupo en cada uno de los íconos
        // Asegúrate de que las referencias existan antes de intentar usarlas
        if (ref.current) {
            ref.current.rotation.y = + clock.elapsedTime * rotationSpeed + Math.PI;
        }

    });

  const  redirectTo = () =>{

    const mailtoLink = `mailto:romeran14@gmail.com?subject=Hello!`;

    // Abrir el enlace en una nueva ventana
    const newWindow = window.open(mailtoLink, '_blank');

    // Si la ventana no se abre, o se cierra inmediatamente (fallo),
    // puedes mostrar un mensaje alternativo o copiar el correo.
    setTimeout(() => {
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        alert('Tu cliente de correo no se pudo abrir. Puedes copiar y pegar la dirección: romeran14@gmail.com');
      }
    }, 750); // 500 ms de espera
}
  
  return (
    <group  {...props} dispose={null}>
      <group    onClick={redirectTo}  ref={ref} scale={0.62} rotation={[-Math.PI / 2, Math.PI, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['Material.002']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/mail_icon.glb')