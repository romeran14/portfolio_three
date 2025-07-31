import {  PerspectiveCamera, Stars, useScroll, Scroll, Float } from "@react-three/drei";
import { useFrame, useThree, ThreeElements } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef, useState, } from "react";
import { Group } from "three";
import * as THREE from "three";
import { NeonText } from "./model_elements/NeonText";
import { Galaxy } from "./model_elements/Galaxy";
import { DancingAlien } from "./model_elements/DancingAlien";
import TextAnimated from "./html_elements/TextAnimated";
import DrawStackIcons from "./html_elements/DrawStackIcons";
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Experience } from "./html_elements/Experience";
import { useGSAP } from '@gsap/react';
import Office from "./model_elements/Office";

gsap.registerPlugin(useGSAP);

function lerp(x: number, y: number, a: number): number {
    return ((1 - a) * x + a * y);
}

function scalePercent(start: number, end: number, scrollPercent: number): number {
    return (scrollPercent - start) / (end - start);
}

export const FLOOR_HEIGHT = 400;
export const NB_FLOORS = 5;

const vector = new THREE.Vector3(0, 0, 0);

export default function Model() {

    const { size, gl } = useThree();

    const isMobile = size.width <= 768;

    const [opacitySecondSection, setOpacitySecondSection] = useState(0);
    const [opacityThirdSection, setOpacityThirdSection] = useState(0);
    const [opacityLastSection, setOpacityLastSection] = useState(0);



    const ref = useRef();
    //@ts-ignore 
    const tl = useRef<Timeline>();

    const firstStageRef = useRef<Group>(null);
    const secondStageRef = useRef();
    const thirdStageRef = useRef();
    const fourtStageRef = useRef();
    const lastStageRef = useRef();

    const camRef = useRef<THREE.PerspectiveCamera | null>();
    const spaceShip = useRef();
    const alien = useRef();
    const planet1 = useRef();
    const planet2 = useRef();
    const planet3 = useRef();
    const planet4 = useRef();
    const group = useRef();
    const scroll = useScroll();
    const ambientLightRef = useRef<ThreeElements["ambientLight"]>()

    const starsRef = useRef<THREE.Group>(null);
    const backgroundColor = useRef(new THREE.Color(0x000000));
    const skyBlue = new THREE.Color(0x87CEEB);
    const black = new THREE.Color(0x000000); // Define el color negro

    useEffect(() => {
        if (!ref.current && !camRef.current) return;
        //@ts-ignore
        camRef.current.lookAt(vector);
    }, []);

    const handleFirstCurve = () => {
        const scrollStatus = scroll.curve(1 / 6, isMobile ? 0.4 : 1 / 3);
        if (scrollStatus > 0 && scrollStatus < 1) {
            setOpacitySecondSection(scrollStatus);
        } else {
            return;
        }
    };

    const handleSecondCurve = () => {
        const scrollStatus = scroll.curve(0.4, isMobile ? 0.6 : 0.3);
        if (scrollStatus > 0 && scrollStatus < 1) {
            setOpacityThirdSection(scrollStatus);
        } else {
            return;
        }
    };

    const handleThirdCurve = () => {
        const scrollStatus = scroll.curve(2 / 3, 1 / 3);
        if (scrollStatus > 0 && scrollStatus > 1) { // Nota: scrollStatus > 1 aquí es raro, quizás debería ser < 1
            setOpacityLastSection(scrollStatus);
        } else {
            return;
        }
    };

    useFrame(() => {
        tl.current.seek(scroll.offset * tl.current.duration());

        handleFirstCurve();
        handleSecondCurve();
        handleThirdCurve();

        const scrollPercent = scroll.offset;


        const colorTransitionStart = 0.70;
        const colorTransitionEnd = 0.95;

        if (scrollPercent >= colorTransitionStart && scrollPercent <= colorTransitionEnd) {
            const progress = (scrollPercent - colorTransitionStart) / (colorTransitionEnd - colorTransitionStart);
            backgroundColor.current.lerpColors(black, skyBlue, progress);
        } else if (scrollPercent < colorTransitionStart) {
            backgroundColor.current.set(black);
        } else {
            backgroundColor.current.set(skyBlue);
        }
        gl.setClearColor(backgroundColor.current);
    });

    useGSAP(() => {
        //@ts-ignore
        if (!ref.current && !camRef.current && !ambientLightRef.current) return;
        console.log(starsRef.current)
        tl.current = gsap.timeline();
        const scrollPercentage = scroll.offset * 100;

        //VERTICAL ANIMATION
        tl.current.to(
            //@ts-ignore
            ref.current.position,
            {
                duration: 4,
                z: (FLOOR_HEIGHT * (NB_FLOORS - 4)) + 25,
                ease: 'power2.inOut',
            },
            0.05
        );
        tl.current.to(
            //@ts-ignore
            ref.current.position,
            {
                duration: 4,
                z: (FLOOR_HEIGHT * (NB_FLOORS - 3)) + 25,
                ease: 'power2.inOut',
            },
            "+=1.5"
        );

        tl.current.to(
            //@ts-ignore
            ref.current.position,
            {
                duration: 4,
                z: ((FLOOR_HEIGHT * (NB_FLOORS - 2))) + 25,
                ease: 'power2.inOut',
            },
            "+=1.5"
        );

	    // tl.current.to(
        //     //@ts-ignore
        //     starsRef.current?.,
        //     {
		// 		value:false,
        //         //duration: 1,

        //         //ease: 'power2.inOut',
        //     },
        //     0.2
        // );	

        tl.current.to(
            //@ts-ignore
            ref.current.position,
            {
                duration: 4,
                z: ((FLOOR_HEIGHT * (NB_FLOORS - 1))) + 25,
                ease: 'power2.inOut',
            },
            "+=1.5"
        );

        //ROTATION
        tl.current.to(
            //@ts-ignore
            ref.current.rotation,
            {
                duration: 0.4,
                ease: 'power2.inOut',
                x: -Math.PI / 2,
            },
            0
        );
        // Camera animation
        tl.current.to(
            camRef.current?.position,
            {
                duration: 1,
                z: lerp(-30, 0, scalePercent(0, 100, scrollPercentage)) * 2,
                ease: 'power2.inOut',
            },
            0
        );

        /**SpaceShip movement */
        tl.current.to(
            //@ts-ignore
            spaceShip?.current.position,
            {
                duration: 3,
                x: 400,
                ease: 'power2.inOut',
                
            },
            0.15
        );

        

        tl.current.to(
           
            ambientLightRef?.current,
            {
                duration: 3,
                intensity: 1,
                ease: 'power2.inOut',
            },
            3
        );
      
    }, { scope: group });

    return (
        <group ref={group}>
            <Scroll html>
                <SectionCustom className={"second_stage"} isMobile={isMobile} opacity={opacitySecondSection}>
                    <TextAnimated isMobile={isMobile} />
                    <DrawStackIcons isMobile={isMobile} />
                </SectionCustom>

                <SectionCustom className={"third_stage"} isMobile={isMobile} opacity={opacityThirdSection}>
                    <Experience />
                </SectionCustom>

                <SectionCustom className={"fourth_stage"} isMobile={isMobile} opacity={opacityLastSection}>
                    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi a, iusto vitae quam doloremque, voluptates aspernatur quibusdam nemo inventore hic fugit corporis quisquam cum! Temporibus dignissimos delectus exercitationem. Vitae, totam. Animi adipisci possimus exercitationem doloremque, ratione culpa dignissimos, repudiandae enim quis error aperiam perferendis quasi sint sit alias id minus.</div>
                </SectionCustom>
                <SectionCustom className={"last_stage"} isMobile={isMobile} opacity={opacityLastSection}>
                    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi a, iusto vitae quam doloremque, voluptates aspernatur quibusdam nemo inventore hic fugit corporis quisquam cum! Temporibus dignissimos delectus exercitationem. Vitae, totam. Animi adipisci possimus exercitationem doloremque, ratione culpa dignissimos, repudiandae enim quis error aperiam perferendis quasi sint sit alias id minus.</div>
                </SectionCustom>
            </Scroll>
            <group  ref={starsRef}>
                <Stars
			       
                    radius={100}
                    depth={100}
                    count={3000}
                    factor={5.5}
                    saturation={1}
                    fade // 'fade' también habilita la transparencia internamente
                    speed={2.5}
                />
			</group>


            <PerspectiveCamera
                makeDefault
                aspect={size.width / size.height}
                position={[0, 15, -30]}
                rotation={[0, Math.PI, 0]}
                near={1}
                zoom={1}
                //@ts-ignore
                ref={camRef}
            />

            <group 
                //@ts-ignore
                ref={ref} >
                {/**First stage */}
                <group ref={firstStageRef} scale={!isMobile ? 1 : 0.6} >
                     <Office  key={"1"} />
                </group>

                {/**Second stage */}
                <group position={[0, FLOOR_HEIGHT, 0]}>
                    <group //@ts-ignore
                        ref={secondStageRef} >
                        {/**RotatingCube */}
                        <Float
                            speed={1.15}
                            rotationIntensity={1.05}
                            floatIntensity={1}
                            floatingRange={[1, 1.005]}
                        >
                            <NeonText
                                text="ABOUT ME"
                                neonColor={"#9f0057"}
                                on={true}
                                position={[9, 30, 4.5]}
                                rotation={[Math.PI * 1.5, Math.PI * 2, Math.PI * 1]}
                                scale={2.6}
                            />
                        </Float>
                    </group>
                    <group position={[-250, 0, -60]}
                        //@ts-ignore
                        ref={spaceShip}>
                        <EffectComposer>
                            <Bloom />
                        </EffectComposer>
                        <Galaxy />
                    </group>

                </group>
                {/**Third stage */}
                <group position={[0, FLOOR_HEIGHT * 2, 0]}>
                    <group
                        position={[-40, isMobile ? 1 : 20, -10]}
                        rotation={[-(Math.PI) / 4, Math.PI / 8, (Math.PI)]}
                        //@ts-ignore
                        ref={alien}>
                        <directionalLight position={[0, 15, -10]} target={alien.current} color={"#189b00"} intensity={1.5} />
                        <DancingAlien />
                    </group>

                    <group
                        //@ts-ignore
                        ref={thirdStageRef} >
                        <Float
                            speed={1.15}
                            rotationIntensity={1.05}
                            floatIntensity={1}
                            floatingRange={[1, 1.005]}
                        >
                            <NeonText
                                text="EXPERIENCE"
                                neonColor={"#9f0057"}
                                on={true}
                                position={[9, 30, 4.5]}
                                rotation={[Math.PI * 1.5, Math.PI * 2, Math.PI * 1]}
                                scale={2.6}
                            />

                        </Float>

                    </group>
                </group>
                {/**Fourth stage */}
                <group position={[0, FLOOR_HEIGHT * 3, 0]}>
                    <group
                        //@ts-ignore
                        ref={fourtStageRef} >

                        <mesh scale={4} position={[0, 0, -10]} rotation={[0, 0.5, 0]}>
                            <sphereGeometry />
                            <meshPhysicalMaterial
                                color={'purple'}
                                roughness={0.9}
                                metalness={0}
                                clearcoat={0.1}
                                clearcoatRoughness={0.8}
                                sheenRoughness={0.8}
                                sheen={0.4}
                                sheenColor={'#ffffff'}
                                emissive={'purple'}
                                emissiveIntensity={1.5}
                            />
                        </mesh>
                    </group>
                </group>
                {/**last stage */}
                <group position={[0, FLOOR_HEIGHT * 4, 0]}>
                    <group
                        //@ts-ignore
                        ref={lastStageRef} 
					
					>
                        <ambientLight intensity={0} ref={ambientLightRef}/>
                        <Office key={"2"} dayVersion/>
  

                        

                    </group>
                </group>
            </group>
        </group>
    );
}

//@ts-ignore
const SectionCustom = (props) => {
    return (
        <section className={props.className} style={{ opacity: props.opacity, padding: "10px", paddingTop: props.isMobile ? "0vh" : "11vh", width: "100vw", display: 'flex', justifyContent: 'center', flexDirection: props.isMobile ? "column" : "row" }}>
            {props.children}
        </section>
    );
};