"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

function SubtleRing() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      // Subtle pulse effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1.5, 0.02, 16, 100]} />
      <meshBasicMaterial color="#3D3D9E" />
    </mesh>
  );
}

interface LoaderProps {
  onLoadComplete: () => void;
}

export default function Loader({ onLoadComplete }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Shorter loading time for a snappier experience
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadComplete, 800); // allow exit animation to finish
    }, 1800);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-10%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary"
        >
          <div className="w-48 h-48 relative mb-6">
            <Canvas camera={{ position: [0, 0, 4] }}>
              <SubtleRing />
            </Canvas>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex gap-1"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
              className="w-1.5 h-1.5 rounded-full bg-indigo"
            />
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
              className="w-1.5 h-1.5 rounded-full bg-indigo"
            />
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
              className="w-1.5 h-1.5 rounded-full bg-indigo"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
