"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.003;
      sphereRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={sphereRef} args={[1.2, 64, 64]} scale={2}>
        <MeshDistortMaterial
          color="#3D3D9E"
          speed={2}
          distort={0.3}
          radius={1}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-40" style={{ minWidth: "100%", minHeight: "100%" }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#3D3D9E" />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}