// Galaxy.jsx
import {useEffect} from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function Galaxy() { // <--- Notice the 'export' here
  const { scene } = useGLTF('/galaxy/space_fighter/scene.gltf');

  useEffect(() => {

    scene.traverse((child) => {
      if (child.isMesh) {
        
        child.material = new THREE.MeshStandardMaterial({
          ...child.material,
          //color: child.material.color,
          emissive: child.material.color,
          emissiveIntensity: 0.3,
          toneMapped: false,
        });
      }
    });
  }, [scene]);

  return (
    <primitive rotation={[Math.PI / 14, Math.PI / 2, Math.PI / 2]} scale={50} object={scene} />
  );
}

useGLTF.preload('/galaxy/space_fighter/scene.gltf');