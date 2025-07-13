import React, { useRef, useEffect } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Avatar(props) {

  const meshRef = useRef()
  const { scene, animations, materials } = useGLTF('/rome_typing/rome-typing.glb')
  const { actions } = useAnimations(animations, meshRef)

  //const fbx = useFBX('/rome_typing/typing_rome.fbx')
  //console.log(fbx)
  //fbx.animations[0].name = 'typing'

  // const actions = useAnimations(fbx.animations, meshRef)

  // useFrame((state) => {
  //   if (meshRef.current) {
  //     // Aquí puedes agregar lógica de animación si es necesario
  //     // Por ejemplo, meshRef.current.rotation.y += 0.01
  //     const head = meshRef.current.getObjectByName("Head")
  //     head.lookAt(state.camera.position)

  //   }

  // })
  useEffect(() => {
    // const moveEyes = meshRef.current.getObjectByName("LeftEye")
    // if (moveEyes) {
    //   console.log(moveEyes)
    // }
    // const head = meshRef.current.getObjectByName("Head")

    // console.log(materials)

    // Reproduce la primera animación automáticamente
    //console.log(meshRef.current, actions)
    actions[Object.keys(actions)[0]]?.play()
  }, [actions])
  return <primitive ref={meshRef} object={scene} {...props} />
}

useGLTF.preload('/rome_typing/rome-typing.glb')
