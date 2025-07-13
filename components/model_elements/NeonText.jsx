import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text3D } from '@react-three/drei'

export function NeonText({ text, neonColor, on, ...props }) {
  const materialRef = useRef()

  useFrame(() => {
    if (on && materialRef.current) {
      const intensity = 1.3 + Math.random() * 2 // Rango más amplio para notar el flicker
      materialRef.current.emissiveIntensity = intensity

    } else if (materialRef.current) {
      materialRef.current.emissiveIntensity = 0
    }
  })

  return (
    <Text3D
      fontSize={10}
      letterSpacing={-0.05}
      depth={10}
      rotation={[0, Math.PI, 0]}
      font={'/fonts/Beon_Medium.json'}
      bevelEnabled={true}
      bevelThickness={0.0005}
      width={10}
      {...props}
    >
      {text}
      <meshPhysicalMaterial
        color={neonColor}
        emissive={neonColor}
        metalness={0.3}
        roughness={0.2}
        clearcoat={1}
        clearcoatRoughness={0.1}
        ref={materialRef}
      />
      <pointLight
        color={neonColor}
        decay={0.2}
        position={[0, 0, 5]}
        intensity={0.2}
      />
    </Text3D>
  )
}
