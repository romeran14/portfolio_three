import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Text } from '@react-three/drei';
import { LinkedinIcon } from "./model_elements/LinkedinIcon";
import { MailIcon } from "./model_elements/MailIcon";
import { GithubIcon} from "./model_elements/GithubIcon";

const ContactLayout = (props) => {
  const orbitGroupRef = useRef();
  const roundedBoxRef = useRef();

  const linkedinRef = useRef()
  const githubRef = useRef()
  const mailRef = useRef()

  // useFrame se ejecuta en cada fotograma
  useFrame(({ clock }) => {
    // Si el grupo de órbita existe, rotamos su eje Y
    if (orbitGroupRef.current && linkedinRef.current) {
      orbitGroupRef.current.rotation.z = clock.elapsedTime * 0.5; // Ajusta el 0.5 para cambiar la velocidad

      linkedinRef.current.rotation.z = -clock.elapsedTime * 0.25; 
    }
  });

  return (
    <group {...props}>
      {/* Grupo que actúa como el pivot para la órbita */}
      <group ref={orbitGroupRef}>
        {/* Posiciona los íconos lejos del centro (0,0,0) del grupo */}
        <MailIcon position={[0, 0, 5]} />
        <GithubIcon position={[5, 0, 0]} />
        <group ref={linkedinRef}>
          <LinkedinIcon  position={[-5, 0, 0]}/>
        </group>
       
      </group>

      {/* El RoundedBox se mantiene estático en el centro */}
      <RoundedBox args={[2, 5, 0.5]} radius={0.1} ref={roundedBoxRef}>
        <meshStandardMaterial color="white" />
        <Text height={2}>
          CV
          <meshStandardMaterial color="black" />
        </Text>
      </RoundedBox>
    </group>
  );
};

export default ContactLayout;