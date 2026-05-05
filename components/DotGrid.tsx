"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import profilePhoto from "./profile-photo.png";

interface DotGridProps {
  imageSrc?: string;
  gridSize?: number;
  dotSize?: number;
  spacing?: number;
  threshold?: number;
  dotColor?: string;
  backgroundColor?: string;
  invert?: boolean;
}

export default function DotGrid({
  imageSrc = profilePhoto.src,
  gridSize = 50,
  dotSize = 4,
  spacing = 10,
  threshold = 128,
  dotColor = "#3D3D9E",
  backgroundColor = "#111118",
  invert = false,
}: DotGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dots, setDots] = useState<boolean[][]>([]);
  const [imageDimensions, setImageDimensions] = useState({ width: gridSize, height: gridSize });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      const imageAspect = img.width / img.height;
      const containerAspect = containerWidth / containerHeight;

      let canvasWidth = gridSize;
      let canvasHeight = gridSize;

      if (imageAspect >= containerAspect) {
        canvasWidth = gridSize;
        canvasHeight = Math.round(gridSize / imageAspect);
      } else {
        canvasHeight = gridSize;
        canvasWidth = Math.round(gridSize * containerAspect);
      }

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      setImageDimensions({ width: canvasWidth, height: canvasHeight });

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvasWidth, canvasHeight);

      try {
        const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
        const data = imageData.data;
        const newDots: boolean[][] = [];

        for (let y = 0; y < canvasHeight; y++) {
          const row: boolean[] = [];
          for (let x = 0; x < canvasWidth; x++) {
            const index = (y * canvasWidth + x) * 4;
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];
            const brightness = (r + g + b) / 3;
            const shouldShow = invert ? brightness > threshold : brightness < threshold;
            row.push(shouldShow);
          }
          newDots.push(row);
        }

        setDots(newDots);
      } catch (error) {
        console.error("Error processing image:", error);
      }
    };

    img.onerror = () => {
      console.error("Error loading image");
    };

    img.src = imageSrc;
  }, [imageSrc, gridSize, threshold, invert, backgroundColor]);

  const gridWidth = useMemo(
    () => imageDimensions.width * spacing,
    [imageDimensions.width, spacing]
  );
  const gridHeight = useMemo(
    () => imageDimensions.height * spacing,
    [imageDimensions.height, spacing]
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor }}
    >
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <svg
        viewBox={`0 0 ${gridWidth} ${gridHeight}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        {dots.map((row, y) =>
          row.map((shouldShow, x) =>
            shouldShow ? (
              <circle
                key={`${x}-${y}`}
                cx={x * spacing + spacing / 2}
                cy={y * spacing + spacing / 2}
                r={dotSize / 2}
                fill={dotColor}
              />
            ) : null
          )
        )}
      </svg>
    </div>
  );
}