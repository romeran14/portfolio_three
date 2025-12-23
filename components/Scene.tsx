'use client'

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { useProgress, Html, ScrollControls } from "@react-three/drei"
import Model from "./Model"




function Loading() {
    const { progress } = useProgress()
  return <Html className="spin" as="div" center>
            <p style={{ color: 'white', whiteSpace: 'nowrap', textAlign: 'center' }}>{progress.toFixed(1)} % loaded</p>
        </Html>;
}

export default function Scene() {
    return (
        // Asegúrate de que el contenedor Canvas tenga altura definida, por ejemplo h-svh (height screen viewport height)
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh bg-gray-900">
            <Suspense fallback={<Loading />}>
                <ScrollControls
                    damping={1.4}
                    pages={4}
                    maxSpeed={0.9}
                >
                  <Model/>
                </ScrollControls>
            </Suspense>
        </Canvas>
    )
}
