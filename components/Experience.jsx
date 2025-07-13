'use client'

import dynamic from 'next/dynamic'
import { Suspense, useState, useRef, useLayoutEffect } from 'react'
import gsap from "gsap";
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'

import Table from './model_elements/Table'
import Monitor from './model_elements/Monitor'
import Mouse from './model_elements/Mouse'
import Aron from './model_elements/Aron'
import PictureFrame from './model_elements/PictureFrame'
import KeyBoard from './model_elements/KeyBoard'
import Chair from './model_elements/Chair'
import Avatar from './model_elements/Avatar'
import RockSign from './model_elements/RockSign'
import PlanetNeon from './model_elements/PlanetNeon'

import NeonText from './model_elements/NeonText'
import CursiNeonText from './model_elements/CursiNeonText'



export const FLOOR_HEIGHT = 20;
export const NB_FLOORS = 4;

const Experience = () => {


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
  const tl = useRef();

  const secondStageRef = useRef()
  const thirdStageRef = useRef()
  const fourtStageRef = useRef()

  const scroll = useScroll();

  useFrame(() => {

    tl.current.progress(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    console.log(scroll.offset, tl.current.duration());
    // VERTICAL ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0
    );

    // //  Rotation
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
    <group onClick={onHandler} ref={ref} >
      {/**First stage */}
      <group>
        <Table scale={20} />
        <Monitor scale={11} position={[1, 3.4, 2]} rotation={[0, 22, 0]} />
        <Mouse />
        <Aron />
        <PictureFrame scale={4} position={[8, 0.1, 0]} rotation={[0, 22.5, 0]} />
        <KeyBoard scale={1 / 610} position={[4, 0.25, -1.5]} rotation={[0, 22, 0]} />
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

      {/**Second stage */}
      <group position={[0, 20, 0]}>
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
      <group position={[0, 40, 0]}>
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
      <group position={[0, 60, 0]}>
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
  )
}

export default Experience