"use client"

import { Canvas, useThree } from "@react-three/fiber"
import Model from "./Model"
import { Suspense } from "react"
import { useProgress, Html, ScrollControls, OrbitControls } from "@react-three/drei"

function Loader() {
  const { progress, active } = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      {/* <directionalLight position={[-5, -5, 5]} intensity={4} /> */}
      <Suspense fallback={<Loader />}>
              <OrbitControls
          // minPolarAngle={Math.PI / 3}   // mínimo ángulo vertical (ejemplo)
          // maxPolarAngle={Math.PI / 1.7} // máximo ángulo vertical (ejemplo)
          enableZoom={false}           // desactiva zoom
          enablePan={false}
          maxZoom={1}
          minZoom={1}
          // maxDistance={50}
          // minDistance={10}
        />
        <ScrollControls
         damping={0.5}
          pages={3}

          >
          <Model />
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}
