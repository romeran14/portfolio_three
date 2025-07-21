import { Html, PerspectiveCamera,  Stars,  Text,  useScroll } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import gsap from "gsap"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Group } from "three"
import * as THREE from "three"
import { Avatar } from "./model_elements/Avatar"
import { Table } from "./model_elements/Table"
import { Mouse } from "./model_elements/Mouse"
import { Keyboard } from "./model_elements/Keyboard"
import { Monitor } from "./model_elements/Monitor"
import { PictureFrame } from "./model_elements/PictureFrame"
import { Aron } from "./model_elements/Aron"
import { NeonText } from "./model_elements/NeonText"
import { CursiNeonText } from "./model_elements/CursiNeonText"
import { RockSign } from "./model_elements/RockSign"
import { Chair } from "./model_elements/Chair"
import { PlanetNeon } from "./model_elements/PlanetNeon"
import {Galaxy} from "./model_elements/Galaxy"
import {DancingAlien} from "./model_elements/DancingAlien"
import TextAnimated from "./html_elements/TextAnimated"
import DrawStackIcons from "./html_elements/DrawStackIcons"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

gsap.registerPlugin(ScrollTrigger)

function lerp(x: number, y: number, a: number): number {
	return ((1 - a) * x + a * y)
}


// Used to fit the lerps to start and end at specific scrolling percentages
function scalePercent(start: number, end: number, scrollPercent: number): number {
	return (scrollPercent - start) / (end - start)
}
export const FLOOR_HEIGHT = 100;
export const NB_FLOORS = 4;

	const vector = new THREE.Vector3(0, 0, 0);

// ...existing code...
export default function Model() {

		const { size } = useThree()

		const isMobile = size.width >= 768

// 		const [on, setOn] = useState(true)
// 		// Cambia el color y la emisividad según el estado "on"
// 		const neonColor = '#189b00'

// 		const onHandler = () => {
// 			if (on) {
// 				return
// 			}
// 			// Cambia el estado "on" al hacer clic
// 			setOn(true)

// 		}

// 		const ref = useRef();
// 		const tl = useRef<Timeline>();

// 		const ambientLightRef = useRef()
// 		const firstStageRef = useRef<Group>(null);
 		const secondStageRef = useRef()
// 		const thirdStageRef = useRef()
// 		const fourtStageRef = useRef()
 		const camRef = useRef<THREE.PerspectiveCamera | null>();
	const spaceShip = useRef()
// 		const alien = useRef()
// 		const planet1 = useRef()
// 		const planet2 = useRef()
// 		const planet3 = useRef()
// 		const planet4 = useRef()

// 		const scroll = useScroll();
// 		useEffect(() => {
// 			if (!ref.current && !camRef.current) return;
// 			/**Look trought Y axes */

// 			//camRef.current.position.set(10, 10, 10);
// 		camRef.current.lookAt(vector);
// 		}, []);

// 		useFrame(() => {
// 			tl.current.seek(scroll.offset * tl.current.duration());


// 		});

// 		useLayoutEffect(() => {
// 			if (!ref.current && !camRef.current && !ambientLightRef.current) return;

// 			tl.current = gsap.timeline();
// 			//tl.current

// 			const scrollPercentage = scroll.offset * 100;

// 			//console.log( scrollPercentage)
// 			//VERTICAL ANIMATION
// 			tl.current.to(
// 				ref.current.position,
// 				{
// 					duration: 2,
// 					z: FLOOR_HEIGHT * (NB_FLOORS - 1),
// 					ease: 'power2.inOut',
// 				// z: 0,
// 				},
// 				0.5 //insert exactly 0 seconds from the start of the timeline
// 			);

// 				tl.current.to(
// 				ref.current.rotation,
// 				{
// 					duration: 2,
// 					// y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
// 						ease: 'power2.inOut',
// 						x: -Math.PI / 2,
// 				},
// 				0 //insert exactly 0 seconds from the start of the timeline
// 			);
// 				// Animación de la cámara (ejemplo: mueve la cámara en Y y Z)
// 	tl.current.to(
// 		camRef.current?.position, // Lerp para suavizar el movimiento
// 		{
// 			duration: 1,
// 			z: lerp(-30, 0,scalePercent(0,100, scrollPercentage))*2, //lerp( 9,-FLOOR_HEIGHT/2 * (NB_FLOORS),scalePercent(0,100, scrollPercentage))*10 , // sigue el grupo pero con offset
// 			ease: 'power2.inOut',
// 		},
// 		0
// );


// 	// Rotation
// 	// tl.current.to(
// 	// ref.current.rotation,
// 	// { duration: 1, x: 0, y: Math.PI / 6, z: 0 },
// 	// 0
// 	// );

// 	// tl.current.to(
// 	// firstStageRef?.current,
// 	// {

// 	// //
// 	// visible: false, // Cambia la opacidad a 0.5
// 	// ease: 'power2.inOut',
// 	// },
// 	// 3
// 	// );

// 	/**SpacheShip movement */
// 		tl.current.to(
// 		spaceShip?.current.position,
// 		{
// 			duration: 3,
// 			x: 250,
// 				ease: 'power2.inOut',
// 		},
// 		0.15
// 	);
// 	// tl.current.to(
// 	// ref.current.position,
// 	// {
// 	// duration: 1,
// 	// x: 10,
// 	// z: 20,
// 	// },
// 	// 1
// 	// );


// 	// tl.current.from(
// 	// secondStageRef.current.position,
// 	// {
// 	// duration: 0.5,
// 	// x: -2,
// 	// },
// 	// 0.5
// 	// );
// 	// tl.current.from(
// 	// secondStageRef.current.rotation,
// 	// {
// 	// duration: 0.5,
// 	// y: -Math.PI / 2,
// 	// },
// 	// 0
// 	// );


// 	// tl.current.from(
// 	// thirdStageRef.current.position,
// 	// {
// 	// duration: 1.5,
// 	// y: 2,
// 	// },
// 	// 0
// 	// );

// 	// tl.current.from(
// 	// thirdStageRef.current.rotation,
// 	// {
// 	// duration: 0.5,
// 	// y: Math.PI / 2,
// 	// },
// 	// 1
// 	// );

// 	// tl.current.from(
// 	// thirdStageRef.current.position,
// 	// {
// 	// duration: 0.5,

// 	// z: -2,
// 	// },
// 	// 1.5
// 	// );

// 	}, []);



	return (
		<group /*ref={group}*/>

			{/* <axesHelper
			scale={20}
			position={[0, 4, 0]}
			rotation={[0, 0, 0]} 
			/> */}
			<Stars
			radius={100}
			depth={100}
			count={4000}
			factor={5.5}
			saturation={0}
			fade
			speed={0.2}
			/>


<PerspectiveCamera
	makeDefault
	/**Look forward Y axe */
	aspect={size.width/size.height}
	position={[0, 15, -30]}
	rotation={[0,Math.PI,0]}
  near={1}
  zoom={1}
  ref={camRef}
/>
	{/* </Float> */}

	<color attach="background" args={['#000000']} />


		<group /*onClick={onHandler} ref={ref} */ >
		{/**First stage */}
		{/* <group ref={firstStageRef} scale={isMobile ? 1 : 0.6} >

			<spotLight
	intensity={15}
	angle={0.4}
	penumbra={0.4}
	position={[0, 25, 0]}
	castShadow
	color={'purple'}
	decay={0.2}
	distance={47}
	power={35}
	></spotLight>
		<pointLight position={[-5, -5, -5]} color='#24D1D3' decay={0.4} />
	<pointLight position={[5, -5, -5]} color='#322566' decay={0.4} />

		<Table scale={20} />
		<Monitor scale={11} position={[1, 3.4, 2]} rotation={[0, 22, 0]} />
		<Mouse />
		<Aron />
		<PictureFrame scale={4} position={[8, 0.1, 0]} rotation={[0, 22.5, 0]} />
		<Keyboard scale={1 / 610} position={[4, 0.25, -1.5]} rotation={[0, 22, 0]} />
		<Avatar scale={10} position={[0, -7.5, -8.5]} rotation={[0.0, 0, 0]} />
		<Chair />
		<mesh scale={30} rotation-x={-Math.PI * 0.5} position-y={-8}>
			<planeGeometry />
			<meshPhysicalMaterial
				color={'#000000'} // Light gray
				roughness={0.8} // Matte surface
				metalness={0} // Not metallic
				clearcoat={0} // No clearcoat
				clearcoatRoughness={0}
				opacity={0.1} // Not needed
			/>
		</mesh>
		<group>
			<group position={[8, 8, 8]} >
				<NeonText
					text="ROMERAN RODRIGUEZ"
					neonColor={neonColor}
					on={true}
					position={[-0.5, 2, 0]}
				/>
				<NeonText
					text="FULLSTACK DEVELOPER"
					neonColor={neonColor}
					on={true}
					position={[-0.2, 0.5, 0]}
				/>
				<CursiNeonText
					text="Don't disturb please!"
					on={on}
					position={[-2, -2, 0]}
				/>

			</group>
			<RockSign />
			<PlanetNeon />
		</group>
		</group> */}

		{/**Second stage */}
		<group position={[0, 0 /*FLOOR_HEIGHT*/ ,10 /*-15*/]}>
			<group ref={secondStageRef} >
				{/**RotatingCube */}
				<ambientLight
					intensity={0.1}
					color='white'
				/>
				<NeonText
					text="ABOUT ME"
					neonColor={"darkred"}
					on={true}
					position={[3.2, 5, 0]}
					//rotation={[Math.PI * 0.5, 0, Math.PI * 1.5]}
				/>
        <Html  center as="section"  wrapperClass="wrapper_stage_1" style={{/*background:"blue",*/ padding:"10px", paddingTop: isMobile ? "200px": "350px",   width:"100vw", display:'flex', justifyContent:'center', flexDirection:isMobile ? "row" : "column"}}>
          <TextAnimated/>
          <DrawStackIcons isMobile={isMobile}/>
        </Html>
      
				{/* <mesh scale={10} position={[0, 0, 0]} rotation={[0, 0.5, 0]}>
					<boxGeometry />
					<meshPhysicalMaterial
						color={'red'} // Light gray
						roughness={0.8} // Matte surface
						metalness={0} // Not metallic
						clearcoat={0} // No clearcoat
						clearcoatRoughness={0}
						opacity={0.1} // Not needed
					/>
				</mesh> */}
			</group>
			<group position={[-250,0,-60]} ref={spaceShip}>
				<pointLight intensity={45} position={[10, 15, -10]} color='green' />
				<EffectComposer>
          <Bloom />
        </EffectComposer>
        <Galaxy />
			</group>

		</group>
		{/**Third stage */}
		{/* <group position={[0, FLOOR_HEIGHT*2 , 0]}>
			<group position={[-15,15,-30]} rotation={[-(Math.PI)/4,Math.PI/8,(Math.PI)]} ref={alien}>
			<DancingAlien />
			</group>

			<group ref={thirdStageRef} >

				<ambientLight
					intensity={0.1}
					color='white'
				/>

			</group>
		</group> */}
		{/**Fourth stage */}
		{/* <group position={[0, FLOOR_HEIGHT*3 , 0]}>
			<group ref={fourtStageRef} >
			
				<mesh scale={4} position={[5,-5,-10]} rotation={[0, 0.5, 0]}>
					<sphereGeometry />
					<meshPhysicalMaterial
						color={'orange'} // Light gray
						roughness={0.9} // Matte surface
						metalness={0} // Not metallic
          clearcoat={0.1} // Pequeño brillo superficial (simulando una capa muy fina)
            clearcoatRoughness={0.8} // Aspereza de ese brillo
            sheenRoughness={0.8} // Aspereza del brillo
              //opacity={0.1} // Not needed
                sheen={0.4} // Un sutil efecto de "brillo sedoso" para atmósferas finas
              sheenColor={'#ffffff'} // Color del brillo
                emissive={'purple'} // Brillo del planeta (si lo quieres sin luces)
              emissiveIntensity={1.5} // Intensidad del brillo del planeta
				   
        />
				</mesh>
				</group>
			</group> */}

		</group>

	</group>
	)
}
