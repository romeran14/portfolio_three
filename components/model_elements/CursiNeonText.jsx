import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text3D } from '@react-three/drei'

export function CursiNeonText({ text, on, ...props }) {
  const materialRef = useRef()
  const [active, setActive] = useState(false)
  const pinkneonColor = active ? "#9f0057" : '#222'

  useEffect(() => {
    if (on) {
      setActive(false)
      const timer = setTimeout(() => {
        setActive(true)
      }, 3000)
      return () => clearTimeout(timer)
    } else {
      setActive(false)
    }
  }, [on])

  useFrame(() => {
    if (active && materialRef.current) {
      // Flicker solo cuando está activo
      const intensity = 4 + Math.random() * 5
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
      font={'/fonts/Havana_Regular.json'}
      bevelEnabled={true}
      bevelThickness={0.0005}
      width={10}
      {...props}
    >
      {text}
      <meshPhysicalMaterial
        color={pinkneonColor}
        emissive={pinkneonColor}
        roughness={0.2}
        clearcoat={1}
        clearcoatRoughness={0.1}
        ref={materialRef}
      />
    </Text3D>
  )
}
