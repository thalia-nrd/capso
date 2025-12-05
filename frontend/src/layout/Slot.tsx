import React from "react";

interface SlotProps {
  x: number;
  y: number;
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

const Slot: React.FC<SlotProps> = ({ x, y, width = 100, height = 100, children }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height,

        // Center the item
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        // Optional: prevents overflow but does NOT scale the item
        overflow: "visible", // ← lets natural size show normally
        pointerEvents: "auto",
      }}
    >
      <div
        style={{
          pointerEvents: "auto",
          // No forced width/height so item keeps natural size
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Slot;