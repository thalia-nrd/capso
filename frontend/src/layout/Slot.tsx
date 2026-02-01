import React from "react";

interface SlotProps {
  x: number; // x position in px relative to 800px frame width
  y: number; // y position in px relative to 900px frame height
  width?: number;  // width in px relative to 800px frame width
  height?: number; // height in px relative to 900px frame height
  children?: React.ReactNode;
}

// constants for base frame dimensions
const BASE_FRAME_WIDTH = 800;
const BASE_FRAME_HEIGHT = 900;

const Slot: React.FC<SlotProps> = ({ x, y, width = 100, height = 100, children }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: `${(x / BASE_FRAME_WIDTH) * 100}%`,
        top: `${(y / BASE_FRAME_HEIGHT) * 100}%`,
        width: `${(width / BASE_FRAME_WIDTH) * 100}%`,
        height: `${(height / BASE_FRAME_HEIGHT) * 100}%`,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        overflow: "visible",
        pointerEvents: "auto",
      }}
    >
      <div
        style={{
          pointerEvents: "auto",          // No forced width/height so item keeps natural size
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Slot;