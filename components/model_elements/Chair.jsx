import { useGLTF } from "@react-three/drei"

export const Chair = (props) => {

  const { nodes, materials } = useGLTF('/chair/chair.glb')

  return (
     <group scale={1 / 10} position={[-10.70, -7, -6]} rotation={[0, 4.7, 0]} {...props} dispose={null}>
      <group position={[-21.91, 2.302, -108.052]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder01_Matteplastic_0.geometry}
          material={materials.Matteplastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder01_BlackMetal_0.geometry}
          material={materials.BlackMetal}
        />
      </group>
      <group position={[-51.39, 55.287, -133.687]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box02_Lether_0.geometry}
          material={materials.Lether}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box02_Chairback_0.geometry}
          material={materials.Chairback}
        />
      </group>
      <group position={[-21.91, -0.065, -108.052]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle02_Chrome_0.geometry}
          material={materials.Chrome}
        />
        <group position={[-9.737, 28.277, -4.174]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder04_Matteplastic_0.geometry}
            material={materials.Matteplastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder02_Matteplastic_0.geometry}
            material={materials.Matteplastic}
            position={[-1.576, 0.248, -4.729]}
          />
        </group>
        <group position={[23.84, 17.931, -4.174]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder20_Matteplastic_0.geometry}
            material={materials.Matteplastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder19_Matteplastic_0.geometry}
            material={materials.Matteplastic}
            position={[-0.419, 1.539, -4.729]}
          />
        </group>
        <group position={[24.416, -17.128, -4.174]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder21_Matteplastic_0.geometry}
            material={materials.Matteplastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder22_Matteplastic_0.geometry}
            material={materials.Matteplastic}
            position={[0.917, 1.305, -4.729]}
          />
        </group>
        <group position={[-8.754, -28.449, -4.174]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder23_Matteplastic_0.geometry}
            material={materials.Matteplastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder24_Matteplastic_0.geometry}
            material={materials.Matteplastic}
            position={[1.58, -0.216, -4.729]}
          />
        </group>
        <group position={[-29.848, -0.519, -4.174]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder26_Matteplastic_0.geometry}
            material={materials.Matteplastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder25_Matteplastic_0.geometry}
            material={materials.Matteplastic}
            position={[-0.697, 1.434, -4.729]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rectangle11_BlackMetal_0.geometry}
        material={materials.BlackMetal}
        position={[-16.035, 30.479, -108.052]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line01_BlackMetal_0.geometry}
        material={materials.BlackMetal}
        position={[-25.15, 24.272, -108.052]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder03_Matteplastic_0.geometry}
        material={materials.Matteplastic}
        position={[-14.457, 23.805, -108.052]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line02_BlackMetal_0.geometry}
        material={materials.BlackMetal}
        position={[-25.595, 24.171, -86.278]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle01_Matteplastic_0.geometry}
        material={materials.Matteplastic}
        position={[-29.262, 24.564, -81.484]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder07_BlackMetal_0.geometry}
        material={materials.BlackMetal}
        position={[-18.739, 27.145, -126.39]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder08_BlackMetal_0.geometry}
        material={materials.BlackMetal}
        position={[-12.851, 27.386, -126.404]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder09_BlackMetal_0.geometry}
        material={materials.BlackMetal}
        position={[-12.9, 28.287, -131.49]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder10_BlackMetal_0.geometry}
        material={materials.BlackMetal}
        position={[-18.788, 28.046, -131.476]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder11_BlackMetal_0.geometry}
        material={materials.BlackMetal}
        position={[-18.777, 27.845, -84.724]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder12_BlackMetal_0.geometry}
        material={materials.BlackMetal}
        position={[-18.728, 26.944, -89.81]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder13_BlackMetal_0.geometry}
        material={materials.BlackMetal}
        position={[-12.889, 28.086, -84.71]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder14_BlackMetal_0.geometry}
        material={materials.BlackMetal}
        position={[-12.84, 27.185, -89.796]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line04_Matteplastic_0.geometry}
        material={materials.Matteplastic}
        position={[-18.111, 48.52, -79.051]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder15_BlackMetal_0.geometry}
        material={materials.BlackMetal}
        position={[-19.862, 33.508, -79.262]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder16_BlackMetal_0.geometry}
        material={materials.BlackMetal}
        position={[-12.681, 33.814, -79.195]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line05_Matteplastic_0.geometry}
        material={materials.Matteplastic}
        position={[-18.111, 48.52, -136.572]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder17_BlackMetal_0.geometry}
        material={materials.BlackMetal}
        position={[-12.681, 33.814, -136.427]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder18_BlackMetal_0.geometry}
        material={materials.BlackMetal}
        position={[-19.862, 33.508, -136.361]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box01_Lether_0.geometry}
        material={materials.Lether}
        position={[7.49, 34.373, -108.052]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/chair/chair.glb')
