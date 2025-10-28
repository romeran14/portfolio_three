'use client'

import { Canvas } from "@react-three/fiber"
import { useState, useEffect, Suspense, memo } from "react"
import { useProgress, Html, ScrollControls, OrbitControls } from "@react-three/drei"
import Model from "./Model"



/**
 * Componente Loader con efecto de desvanecimiento (Fade Out).
 * Utiliza useState y useEffect para gestionar la opacidad cuando la carga llega al 100%.
 */
const FadingLoader = () => {
    const { progress, loaded } = useProgress()
    // 1. Estado para controlar la opacidad del componente (0 a 1)
    const [opacity, setOpacity] = useState(1)
    // 2. Estado para controlar si el loader debe estar visible o no (desmontar)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        // Cuando el progreso es 100 y ya ha habido carga (loaded > 0)
        if (progress === 100 && loaded > 0) {
            // Inicia el fade out: establece la opacidad a 0
            setOpacity(0)
        }
    }, [progress, loaded])

    // Este useEffect se activa cuando la opacidad llega a 0 (después de la transición CSS)
    useEffect(() => {
        if (opacity === 0) {
            // Espera la duración de la transición CSS (ej. 500ms) antes de ocultar/desmontar
            const timer = setTimeout(() => {
                setVisible(false)
            }, 500) // Debe coincidir con 'transition-duration' en el CSS

            return () => clearTimeout(timer)
        }
    }, [opacity])


    if (!visible) return null // Desmonta el componente una vez que la transición ha terminado

    return (
        <Html
            center
            style={{
                // 3. Aplica la opacidad controlada por el estado
                opacity: opacity,
                // 4. Agrega una transición suave (0.5s = 500ms)
                transition: 'opacity 0.5s ease-out',
                pointerEvents: opacity === 0 ? 'none' : 'auto', // Evita que bloquee clics cuando está invisible
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fondo oscuro para mejor contraste
                color: 'white',
                padding: '2rem',
                borderRadius: '0.75rem',
                minWidth: '200px',
                textAlign: 'center',
                fontFamily: 'sans-serif',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                zIndex: 1000, // Asegura que esté por encima del canvas
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
            }}>
                <div style={{
                    width: '100px',
                    height: '10px',
                    borderRadius: '5px',
                    backgroundColor: '#333',
                    overflow: 'hidden',
                }}>
                    {/* Barra de progreso visual */}
                    <div style={{
                        width: `${progress}%`,
                        height: '100%',
                        backgroundColor: '#60a5fa', // Tailwind blue-400
                        transition: 'width 0.1s ease-out'
                    }} />
                </div>
                {/* Texto del progreso */}
                {progress.toFixed(1)} % cargado
            </div>
        </Html>
    )
}


export default function Scene() {
    return (
        // Asegúrate de que el contenedor Canvas tenga altura definida, por ejemplo h-svh (height screen viewport height)
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh bg-gray-900">
            <Suspense fallback={<FadingLoader />}>
                {/* Tu código Three.js, envuelto en ScrollControls */}
                <ScrollControls
                    damping={1.4}
                    pages={4}
                    maxSpeed={0.9}
                >
                  <Model/>
                </ScrollControls>

                {/* Si necesitas OrbitControls, descoméntalos aquí. Asegúrate de que no interfieran con ScrollControls */}
                {/* <OrbitControls
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 1.7}
                    enableZoom={false}
                    maxAzimuthAngle={Math.PI / 3}
                    enablePan={true}
                    maxDistance={30}
                    minDistance={10}
                /> */}
            </Suspense>
        </Canvas>
    )
}
