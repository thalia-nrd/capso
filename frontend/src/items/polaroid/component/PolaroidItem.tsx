import React from "react";

interface PolaroidItemProps {
  onOpen: () => void;
}

const PolaroidItem: React.FC<PolaroidItemProps> = ({ onOpen }) => {
  return (
    <img
      src="content/Polaroid.png"
      alt="Polaroid"
      style={{
        width: "100%",
        height: "100%",
        cursor: "pointer",
      }}
      onClick={onOpen}
    />
  );
};

export default PolaroidItem;