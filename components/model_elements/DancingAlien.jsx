import { useRef , useEffect} from 'react'
import { useGLTF, useAnimations, Float} from '@react-three/drei'

export function DancingAlien(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/galaxy/dancing_alien.glb')
  const { actions } = useAnimations(animations, group)


  useEffect(() => {
    console.log(materials)
    actions["mixamo.com"]?.play()
  }, [])
  
  return (
    <Float
 
      enabled
      floatIntensity={10}
      floatingRange={[1,1.5]}
      speed={6}
     rotationIntensity={1}
     
    >
  
    <group ref={group} scale={8} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.711}>
          <group name="7ccd00a2c96c4cb589b3e54982af2082fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    material={materials.mat_0}
                    skeleton={nodes.Object_6.skeleton}
                  />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.mat_1}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.mat_2}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.mat_3}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <group name="RigModels_Alien" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>

    </Float>

  )
}

useGLTF.preload('/galaxy/dancing_alien.glb')