import { Float, PerspectiveCamera, Sparkles, Stars, useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import gsap from "gsap"
import dynamic from "next/dynamic"
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react"
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


export const FLOOR_HEIGHT = 50;
export const NB_FLOORS = 4;


//useGLTF.preload("/robot_playground.glb")
//const Experience = dynamic(() => import('./Experience'), { ssr: false })
// ...existing code...
export default function Model() {
	// const group = useRef<Group>(null)
	// const { nodes, materials, animations, scene } = useGLTF(
	// "/robot_playground.glb"
	// )
	// const { actions, clips } = useAnimations(animations, scene)
	// const scroll = useScroll()

	// useEffect(() => {
	// console.log(actions)
	// //@ts-ignore
	// actions["Experiment"].play().paused = true
	// }, [])
	// useFrame(
	// () =>
	// //@ts-ignore
	// (actions["Experiment"].time =
	// //@ts-ignore
	// (actions["Experiment"].getClip().duration * scroll.offset) / 4)
	// )

  
  const [on, setOn] = useState(true)
  // Cambia el color y la emisividad según el estado "on"
  const neonColor = '#189b00'

  const onHandler = () => {
    if (on) {
      return
    }
    // Cambia el estado "on" al hacer clic
    setOn(true)

  }

  const ref = useRef();
  const tl = useRef<Timeline>();

  const secondStageRef = useRef()
  const thirdStageRef = useRef()
  const fourtStageRef = useRef()
  const camRef = useRef<THREE.PerspectiveCamera | null>();

  const scroll = useScroll();

  useFrame(() => {
    //console.log("OFFSET",scroll.range, "DURATION", tl.current.duration());
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    if (!ref.current && !camRef.current) return;

    tl.current = gsap.timeline();
    //console.log(scroll.offset, tl.current.duration());
    // VERTICAL ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0 //insert exactly 0 seconds from the start of the timeline
    );

      // Animación de la cámara (ejemplo: mueve la cámara en Y y Z)
tl.current.to(
  camRef.current.position,
  {
    duration: 1,
    y: -FLOOR_HEIGHT/2 * (NB_FLOORS), // sigue el grupo pero con offset
    z: 0,
    ease: "power2.inOut",
  },
  0
);

    //  Rotation
    // tl.current.to(
    //   ref.current.rotation,
    //   { duration: 1, x: 0, y: Math.PI / 6, z: 0 },
    //   0
    // );
    // tl.current.to(
    //   ref.current.rotation,
    //   { duration: 1, x: 0, y: -Math.PI / 6, z: 0 },
    //   1
    // );


    // tl.current.to(
    //   ref.current.position,
    //   {
    //     duration: 1,
    //     x: -10,
    //     z: 20,
    //   },
    //   0
    // );
    // tl.current.to(
    //   ref.current.position,
    //   {
    //     duration: 1,
    //     x: 10,
    //     z: 20,
    //   },
    //   1
    // );


    // tl.current.from(
    //   secondStageRef.current.position,
    //   {
    //     duration: 0.5,
    //     x: -2,
    //   },
    //   0.5
    // );
    // tl.current.from(
    //   secondStageRef.current.rotation,
    //   {
    //     duration: 0.5,
    //     y: -Math.PI / 2,
    //   },
    //   0
    // );


    // tl.current.from(
    //   thirdStageRef.current.position,
    //   {
    //     duration: 1.5,
    //     y: 2,
    //   },
    //   0
    // );

    // tl.current.from(
    //   thirdStageRef.current.rotation,
    //   {
    //     duration: 0.5,
    //     y: Math.PI / 2,
    //   },
    //   1
    // );

    // tl.current.from(
    //   thirdStageRef.current.position,
    //   {
    //     duration: 0.5,

    //     z: -2,
    //   },
    //   1.5
    // );

  }, []);
	return (
		<group /*ref={group}*/>
			<Stars
			radius={100}
			depth={100}
			count={4000}
			factor={5.5}
			saturation={0}
			fade
			speed={0.2}
			/>
				<spotLight
				intensity={15}
				angle={0.5}
				penumbra={0.4}
				position={[0, 30, 0]}
				castShadow
				color={'purple'}
				decay={0.2}
				distance={47}
				power={35}
			></spotLight>
				<pointLight position={[-10, -10, -10]} color='#24D1D3' decay={0.2} />
			<pointLight position={[10, -10, -10]} color='#322566' decay={0.2} />
			{/* <Float 
        rotationIntensity={0}
        floatIntensity={5}
        speed={1.5}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        damping={0.1}
        //onUpdate={(self) => console.log(self)}
      > */}
<PerspectiveCamera
  makeDefault
  position={[0, 10, -30]}
  //fov={40}
  zoom={1}
  ref={camRef}
/>
      {/* </Float> */}

				<color attach="background" args={['#000000']} />
   
		
        <group onClick={onHandler} ref={ref} >
      {/**First stage */}
      <group>
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
            color={'#494949'}         // Light gray
            roughness={0.8}           // Matte surface
            metalness={0}             // Not metallic
            clearcoat={0}             // No clearcoat
            clearcoatRoughness={0}
            opacity={0.1}  // Not needed
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
      </group>
      {/**Warp space effect */}
       {/* <Sparkles
        scale={20}
        position={[0,25, 0]}
        speed={5}
        count={200}
        size={15}
        //opacity={0.2}
        color={'#ffffff'}
        noise={10}
       ></Sparkles> */}
      {/**Second stage */}
      <group position={[0, FLOOR_HEIGHT , 0]}>
        <group ref={secondStageRef} >
          {/**RotatingCube */}
          <ambientLight
            intensity={0.1}
            color='white'
          />
          <mesh scale={10} position={[0, 0, 0]} rotation={[0, 0.5, 0]}>
            <boxGeometry />
            <meshPhysicalMaterial
              color={'red'}         // Light gray
              roughness={0.8}           // Matte surface
              metalness={0}             // Not metallic
              clearcoat={0}             // No clearcoat
              clearcoatRoughness={0}
              opacity={0.1}  // Not needed
            />
          </mesh>
        </group>
      </group>
      {/**Third stage */}
      <group position={[0, FLOOR_HEIGHT*2 , 0]}>
        <group ref={thirdStageRef} >
          {/**RotatingCube */}
          <ambientLight
            intensity={0.1}
            color='white'
          />
          <mesh scale={10} position={[0, 0, 0]} rotation={[0, 0.5, 0]}>

            <boxGeometry />
            <meshPhysicalMaterial
              color={'red'}         // Light gray
              roughness={0.8}           // Matte surface
              metalness={0}             // Not metallic
              clearcoat={0}             // No clearcoat
              clearcoatRoughness={0}
              opacity={0.1}  // Not needed
            />
          </mesh>
        </group>
      </group>
      {/**Fourth stage */}
      <group position={[0, FLOOR_HEIGHT*3 , 0]}>
        <group ref={fourtStageRef} >
          {/**RotatingCube */}
          <ambientLight
            intensity={0.1}
            color='white'
          />
          <mesh scale={10} position={[0, 0, 0]} rotation={[0, 0.5, 0]}>
            <boxGeometry />
            <meshPhysicalMaterial
              color={'red'}         // Light gray
              roughness={0.8}           // Matte surface
              metalness={0}             // Not metallic
              clearcoat={0}             // No clearcoat
              clearcoatRoughness={0}
              opacity={0.1}  // Not needed
            />
          </mesh>
        </group>
      </group>

    </group>
    
		</group>
	)
}
