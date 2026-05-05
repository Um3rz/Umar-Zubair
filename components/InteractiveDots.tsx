"use client";

import { useState, useEffect, useMemo, useRef } from "react";

interface InteractiveDotsProps {
  dotColor?: string;
  dotSize?: number;
  spacing?: number;
  proximityRadius?: number;
  maxOpacity?: number;
  backgroundOpacity?: number;
}

export default function InteractiveDots({
  dotColor = "#3D3D9E",
  dotSize = 4,
  spacing = 60,
  proximityRadius = 150,
  maxOpacity = 1,
  backgroundOpacity = 0.15,
}: InteractiveDotsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const dots = useMemo(() => {
    const dotsArray = [];
    const cols = Math.ceil(dimensions.width / spacing);
    const rows = Math.ceil(dimensions.height / spacing);
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * spacing + spacing / 2;
        const y = row * spacing + spacing / 2;
        dotsArray.push({ x, y, key: `${col}-${row}` });
      }
    }
    return dotsArray;
  }, [dimensions.width, dimensions.height, spacing]);

  const getOpacity = (dotX: number, dotY: number) => {
    const distance = Math.sqrt(
      Math.pow(mousePos.x - dotX, 2) + Math.pow(mousePos.y - dotY, 2)
    );
    if (distance > proximityRadius) return backgroundOpacity;
    const hoverOpacity = (1 - distance / proximityRadius) * maxOpacity;
    return Math.max(backgroundOpacity, hoverOpacity);
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {Array.from({ length: Math.ceil(dimensions.width / spacing) }).map(
          (_, i) => {
            const x = i * spacing + spacing / 2;
            return (
              <line
                key={`v-${i}`}
                x1={x}
                y1={0}
                x2={x}
                y2={dimensions.height}
                stroke={dotColor}
                strokeWidth={1}
                opacity={backgroundOpacity}
              />
            );
          }
        )}
        {Array.from({ length: Math.ceil(dimensions.height / spacing) }).map(
          (_, i) => {
            const y = i * spacing + spacing / 2;
            return (
              <line
                key={`h-${i}`}
                x1={0}
                y1={y}
                x2={dimensions.width}
                y2={y}
                stroke={dotColor}
                strokeWidth={1}
                opacity={backgroundOpacity}
              />
            );
          }
        )}
      </svg>
      {dots.map((dot) => {
        const opacity = getOpacity(dot.x, dot.y);
        return (
          <div
            key={dot.key}
            className="absolute rounded-full transition-opacity ease-out"
            style={{
              left: dot.x,
              top: dot.y,
              width: dotSize,
              height: dotSize,
              backgroundColor: dotColor,
              opacity,
              transform: "translate(-50%, -50%)",
              transition: "opacity 0.2s ease-out",
            }}
          />
        );
      })}
    </div>
  );
}