import React from "react";

interface MirrorItemProps {
  onOpen: () => void;
}

const MirrorItem: React.FC<MirrorItemProps> = ({ onOpen }) => {
  return (
    <img
      src="content/Mirror.png"
      alt="Mirror"
      style={{
        width: "100%",
        height: "100%",
        cursor: "pointer",
      }}
      onClick={onOpen}
    />
  );
};

export default MirrorItem;