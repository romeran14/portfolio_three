
import { Table } from './Table'
import { Monitor } from './Monitor'
import { Mouse } from './Mouse'
import { Aron } from './Aron'
import { PictureFrame } from './PictureFrame'
import { Keyboardd } from './KeyBoardd'
import { Avatar } from './Avatar'
import { Chair } from './Chair'
import { NeonText } from './NeonText'
import { CursiNeonText } from './CursiNeonText'
import { RockSign } from './RockSign'
import { PlanetNeon } from './PlanetNeon'
import { GroupProps, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

interface Props{
    dayVersion?:boolean;
}

const Office = ({dayVersion}:Props) => {

   const dayVersionaProps:Partial<GroupProps> = dayVersion ? {
    position:[-20,30,-5],
    rotation:[Math.PI / 2,-Math.PI / 4,0],
    //dispose:null
   }:{
    //dispose:null
   }

     const floorTexture = useLoader(TextureLoader, '/textures/wood_floor.png');
  return (
    <group {...dayVersionaProps}>
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
        />
        <pointLight position={[-5, -5, -5]} color='#24D1D3' decay={0.4} />
        <pointLight position={[5, -5, -5]} color='#322566' decay={0.4} />

        <Table scale={20} />
        <Monitor scale={11} position={[1, 3.4, 2]} rotation={[0, 22, 0]} />
        <Mouse />
        <Aron />
        <PictureFrame scale={4} position={[8, 0.1, 0]} rotation={[0, 22.5, 0]} />
        <Keyboardd scale={1 / 610} position={[4, 0.25, -1.5]} rotation={[0, 22, 0]} />
        <Avatar scale={10} position={[0, -7.5, -8.5]} rotation={[0.0, 0, 0]} />
        <Chair />
        <mesh scale={35} rotation-x={-Math.PI * 0.5} position-y={-8} position-x={2}>
            <planeGeometry />
            <meshPhysicalMaterial
                map={  floorTexture }
                color={ dayVersion ?  undefined :'#000000'} // Light gray
                roughness={0.8} // Matte surface
                metalness={0} // Not metallic
                clearcoat={0} // No clearcoat
                clearcoatRoughness={0}
                opacity={0.1} // Not needed
            />
        </mesh>
        {
            dayVersion &&
            <>
            <mesh  rotation-y={-Math.PI * 0.5} position-y={2.65} position-x={20}>
                <planeGeometry args={[34, 22]}  />
                <meshPhysicalMaterial
                    color={'purple'} // Light gray
                    roughness={0.9}   // Muy rugoso para un aspecto mate, como pintura seca
                    metalness={0}     // Definitivamente no metálico para una pared
                    clearcoat={0}     // Sin capa transparente brillante
                    clearcoatRoughness={0}
                    opacity={1}       // Totalmente opaco (si quieres que sea una pared sólida)
                    transparent={false} // No es necesario si opacity es 1
                    // transmission={0} // No es un material translúcido como vidrio
                    // ior={1.5}        // Índice de refracción (no aplica mucho aquí)
                    // flatShading={true} // Opcional: para un aspecto más "plano" o bajo poligonaje
                />
            </mesh>
     
            <mesh  rotation-y={-Math.PI } position={[2.30,2.65,17]}  >
                <planeGeometry args={[35.5, 22]}  />
                <meshPhysicalMaterial
                    color={'purple'} // Light gray
                    roughness={0.9}   // Muy rugoso para un aspecto mate, como pintura seca
                    metalness={0}     // Definitivamente no metálico para una pared
                    clearcoat={0}     // Sin capa transparente brillante
                    clearcoatRoughness={0}
                    opacity={1}       // Totalmente opaco (si quieres que sea una pared sólida)
                    transparent={false} // No es necesario si opacity es 1
                    // transmission={0} // No es un material translúcido como vidrio
                    // ior={1.5}        // Índice de refracción (no aplica mucho aquí)
                    // flatShading={true} // Opcional: para un aspecto más "plano" o bajo poligonaje
                />
            </mesh>
            </>
        }
        <group>
            <group position={[8, 8, 8]} >
                <NeonText
                    text="ROMERAN RODRIGUEZ"
                    neonColor={'#189b00'}
                    on={true}
                    position={[-0.5, 2, 0]}
                />
                <NeonText
                    text="FULLSTACK DEVELOPER"
                    neonColor={'#189b00'}
                    on={true}
                    position={[-0.2, 0.5, 0]}
                />
                <CursiNeonText
                    text="Don't disturb please!"
                    position={[-2, -2, 0]}
                />
                <RockSign />
                <PlanetNeon />
            </group>

        </group>
    </group>
  )
}

export default Office