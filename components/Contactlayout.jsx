import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Text} from '@react-three/drei';
import { LinkedinIcon } from "./model_elements/LinkedinIcon";
import { MailIcon } from "./model_elements/MailIcon";
import { GithubIcon} from "./model_elements/GithubIcon";

const ContactLayout = (props) => {

	const orbitGroupRef = useRef();
	const roundedBoxRef = useRef();

	// Define la velocidad de rotación una sola vez
	const rotationSpeed = 0.5;

	// useFrame se ejecuta en cada fotograma
	useFrame(({ clock }) => {
		// Si el grupo de órbita existe, rotamos su eje Z (como ya lo tenías)
		if (orbitGroupRef.current) {
			orbitGroupRef.current.rotation.z = clock.elapsedTime * rotationSpeed;
		}

	});

  //cv-Romeran-Rodriguez.pdf

  const redirectTo = () => {
    window.open("/cv-Romeran-Rodriguez.pdf", '_blank');
  }
	return (
		<group {...props}>
			{/* Grupo que actúa como el pivot para la órbita */}
			<group ref={orbitGroupRef}>

				{/* Posiciona los íconos lejos del centro (0,0,0) del grupo */}
				{/* Agrega las referencias a cada ícono para poder manipularlos */}
				<MailIcon position={[0, -4.1,0]} />
				<GithubIcon position={[2.5, -1, 0]}/>
				<LinkedinIcon position={[-2.5, -0.85, 0]} />
			</group>

			{/* El RoundedBox se mantiene estático en el centro */}
			<RoundedBox onClick={redirectTo} rotation={[0,0,Math.PI]} args={[2, 2.7, 0.4]} scale={1.4} radius={0.1} ref={roundedBoxRef}>
				<meshStandardMaterial color="white" />
				<Text fontWeight={800} position={[0,0.82,1]} scale={0.23} color={"black"} height={2}>
					Resume

				</Text>

				<Text fontWeight={400} position={[0.035,-0.2,1]} textAlign="justify" fontSize={0.15} scale={0.75} color={"black"} maxWidth={1.95}>
					Lorem ipsum dolor sit.
						consectetur adipisicing
							elit. Id, optio.
								Lorem ipsum dolor sit.
						consectetur adipisicing
							elit. Id, optio.
								Lorem ipsum dolor sit.
						consectetur adipisicing
							elit. Id, optio.
								Lorem ipsum dolor sit.
						consectetur adipisicing
							elit. Id, optio.
				</Text>
			</RoundedBox>
		</group>
	);
};

export default ContactLayout;
