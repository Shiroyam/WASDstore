import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
  };
  materials: {
    Big_Buttons: THREE.MeshStandardMaterial;
    Chassis: THREE.MeshStandardMaterial;
    Small_Buttons: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/model3d/scene.gltf') as GLTFResult;
  const mesh = useRef(null);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh scale={6} position={[6, 3, -5]} ref={mesh}>
          <mesh
            geometry={nodes.Object_2.geometry}
            material={materials.Big_Buttons}
          />
          <mesh
            geometry={nodes.Object_3.geometry}
            material={materials.Chassis}
          />
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.Small_Buttons}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload('/model3d/scene.gltf');
