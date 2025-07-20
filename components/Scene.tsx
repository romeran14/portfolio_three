"use client"

import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import { memo, Suspense } from "react"
import { useProgress, Html, ScrollControls, OrbitControls } from "@react-three/drei"


const  Loader = () => {
  const { progress} = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>

}

export default function Scene() {

  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">

      <Suspense fallback={<Loader />}>
        <OrbitControls
            minPolarAngle={Math.PI / 3}   // mínimo ángulo vertical (ejemplo)
            maxPolarAngle={Math.PI / 1.7} // máximo ángulo vertical (ejemplo)
            //enableZoom={false}           // desactiva zoom
            //enablePan={false}
            //enabled={false}
            maxZoom={1}
            minZoom={1}
            //enableRotate={false}
            maxDistance={20}
            minDistance={10}
        /> 
        {/* <ScrollControls
    
         damping={1.2}
          pages={4}
         maxSpeed={0.7}
          > */}
         
    <Model />
           
      
        {/* </ScrollControls> */}
      </Suspense>
    </Canvas>
  )
}
