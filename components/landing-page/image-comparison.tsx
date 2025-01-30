"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import dog from "@/images/glasses/glasses-3.jpg";
import plainDog from "@/images/plain-dog.png";

export default function ImageComparison() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleMove = (event: MouseEvent | TouchEvent) => {
      if (!isDragging.current || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const x = "touches" in event ? event.touches[0].clientX : event.clientX;
      const relativeX = x - containerRect.left;
      const newPosition = (relativeX / containerRect.width) * 100;

      setPosition(Math.min(Math.max(newPosition, 0), 100));
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []); // Added handleMove to the dependency array

  return (
    <div className="relative" ref={containerRef}>
      {/* img1 */}
      <Image
        className="pointer-events-none inset-0 select-none rounded-lg"
        alt="cutely dressed dog"
        src={dog}
        width={500}
        height={500}
      />

      {/* img 2 */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 0 0 ${position}%)`,
        }}
      >
        <Image
          className="pointer-events-none select-none rounded-lg"
          alt="cutely dressed dog"
          src={plainDog}
          width={500}
          height={500}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute inset-y-0"
        style={{ left: `${position}%` }}
        onMouseDown={() => (isDragging.current = true)}
        onTouchStart={() => (isDragging.current = true)}
      >
        <div className="absolute inset-y-0 -left-px w-0.5 bg-blue-500" />
        <div className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize rounded-full bg-blue-500 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M21 12H3M3 12l5-5M3 12l5 5M21 12l-5-5M21 12l-5 5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
