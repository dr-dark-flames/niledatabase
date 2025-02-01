"use client";
import { useCallback, useRef, useState } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};
export default function BgHoverer(props: Props) {
  const { children } = props;
  const [bgPosition, setBgPosition] = useState("50% 50%");
  const [active, setActive] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Event handler to update position based on mouse movement within the div
  const handleMouseMove = useCallback(
    (event: { clientX: any; clientY: any }) => {
      const container = containerRef.current;
      if (container != null) {
        const { left, top } = container.getBoundingClientRect();
        const { clientX, clientY } = event;

        // Calculate position relative to the container
        setPosition({
          x: clientX - left - 90, // Center the 180px box
          y: clientY - top - 90, // Center the 180px box
        });
      }
    },
    []
  );
  return (
    <div
      ref={containerRef}
      className="bg-hover w-full h-full flex relative overflow-hidden transition-[background] duration-300 ease-in-out"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setActive(false);
      }}
      onMouseEnter={() => {
        setActive(true);
      }}
    >
      <div
        className={`pointer-events-none absolute blur-[25px] bg-white h-[180px] w-[180px] bg-90 rounded-full translate-z-0 will-change-transform transition-opacity duration-200 translate-x-[${position.x}px] translate-y-[${position.y}px] ${
          active ? "opacity-20" : "opacity-0"
        }`}
      />
      <div
        className={`flex-1 flex flex-col ${
          active ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
