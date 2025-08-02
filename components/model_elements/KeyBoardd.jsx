import { useGLTF } from "@react-three/drei"

export const Keyboardd = (props) => {

   const { nodes, materials } = useGLTF('/keyboard/keyboard.glb')
  return (

        <group scale={1 / 500} {...props} dispose={null}>
      <group
        position={[957.113, -168.757, 0]}
        rotation={[-1.578, 0, 0]}
        scale={[4082.655, 1675.746, 1063.665]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Material011_0.geometry}
          material={materials['Material.011']}
        />
        <group
          position={[0.068, -0.037, 0.04]}
          rotation={[0.008, 0, 0]}
          scale={[0.506, 0.4, 0.037]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Material005_0.geometry}
            material={materials['Material.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Material003_0.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Material004_0.geometry}
            material={materials['Material.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Material007_0.geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Material006_0.geometry}
            material={materials['Material.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Material006_0.geometry}
            material={materials['Material.006']}
            position={[0, 0, 1.116]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.245, 0.097, 0.211]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.287, -0.05, 0.2]}
          rotation={[0.007, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.226, -0.05, 0.2]}
          rotation={[0.007, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text003_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.164, -0.05, 0.2]}
          rotation={[0.007, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text004_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.305, 0.097, 0.211]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.z001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.26, -0.199, 0.188]}
          rotation={[0.01, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r002_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.121, 0.097, 0.211]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.t001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.06, 0.097, 0.211]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.y001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.003, 0.096, 0.211]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.u001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.064, 0.095, 0.211]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.i001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.126, 0.096, 0.211]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.o001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.189, 0.096, 0.211]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.p001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.251, 0.096, 0.211]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.f001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.102, -0.05, 0.2]}
          rotation={[0.007, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.g001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.041, -0.05, 0.2]}
          rotation={[0.007, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.h001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.021, -0.05, 0.2]}
          rotation={[0.007, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.j001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.081, -0.058, 0.2]}
          rotation={[0.007, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.k001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.148, -0.05, 0.2]}
          rotation={[0.007, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.l001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.209, -0.048, 0.2]}
          rotation={[0.007, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.x001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.199, -0.199, 0.188]}
          rotation={[0.01, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.c001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.137, -0.199, 0.188]}
          rotation={[0.01, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.v001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.073, -0.199, 0.188]}
          rotation={[0.01, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.b001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.012, -0.199, 0.188]}
          rotation={[0.01, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.n001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.05, -0.199, 0.188]}
          rotation={[0.01, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.m001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.113, -0.199, 0.188]}
          rotation={[0.01, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.185, 0.097, 0.211]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.333, 0.244, 0.22]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text006_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.271, 0.244, 0.22]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text007_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.208, 0.244, 0.22]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text008_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.146, 0.244, 0.22]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text009_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.083, 0.244, 0.22]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text010_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.023, 0.244, 0.22]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text011_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.04, 0.244, 0.22]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text012_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.102, 0.244, 0.22]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text013_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.163, 0.24, 0.22]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text014_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.226, 0.24, 0.22]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text015_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.405, 0.283, 0.221]}
          rotation={[0.014, 0, 0]}
          scale={[0.019, 0.045, 0.071]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text016_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.388, 0.126, 0.212]}
          rotation={[0.014, 0, 0]}
          scale={[0.023, 0.055, 0.087]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text017_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.384, -0.017, 0.21]}
          rotation={[0.014, 0, 0]}
          scale={[0.023, 0.055, 0.087]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text018_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.376, -0.171, 0.184]}
          rotation={[0.014, 0, 0]}
          scale={[0.023, 0.055, 0.087]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text019_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.384, -0.312, 0.172]}
          rotation={[0.014, 0, 0]}
          scale={[0.023, 0.055, 0.087]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap_1_264001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.224, -0.317, 0.179]}
          rotation={[1.578, 0, 0]}
          scale={[0.004, 0.015, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap_1_172001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.166, -0.35, 0.177]}
          rotation={[1.578, 0, 0]}
          scale={[0.003, 0.011, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap_1_172002_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.22, -0.312, 0.176]}
          rotation={[1.578, 0, 0]}
          scale={[0.002, 0.009, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text020_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.341, -0.312, 0.175]}
          rotation={[0.014, 0, 0]}
          scale={[0.023, 0.055, 0.087]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text021_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.376, -0.17, 0.185]}
          rotation={[0.014, 0, 0]}
          scale={[0.023, 0.055, 0.087]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.p003_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.334, -0.035, 0.196]}
          rotation={[0.014, 0, 0]}
          scale={[0.031, 0.075, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text022_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.418, -0.01, 0.198]}
          rotation={[0.014, 0, 0]}
          scale={[0.023, 0.055, 0.087]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text023_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.41, 0.283, 0.221]}
          rotation={[0.014, 0, 0]}
          scale={[0.021, 0.051, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text024_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.451, 0.104, 0.209]}
          rotation={[0.014, 0, 0]}
          scale={[0.021, 0.051, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text025_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.523, 0.283, 0.221]}
          rotation={[0.014, 0, 0]}
          scale={[0.016, 0.038, 0.061]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text026_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.523, 0.129, 0.209]}
          rotation={[0.014, 0, 0]}
          scale={[0.014, 0.035, 0.055]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text027_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.52, -0.02, 0.201]}
          rotation={[0.014, 0, 0]}
          scale={[0.014, 0.035, 0.055]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text028_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0.526, -0.166, 0.186]}
          rotation={[0.014, 0, 0]}
          scale={[0.014, 0.035, 0.055]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/keyboard/keyboard.glb')
