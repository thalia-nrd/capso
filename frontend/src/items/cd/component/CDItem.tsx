import React from "react";

interface CDItemProps {
  onOpen: () => void;
}

const CDItem: React.FC<CDItemProps> = ({ onOpen }) => {
  return (
    <img
      src="content/CD.png"
      alt="CD"
      style={{
        width: "100%",
        height: "100%",
        cursor: "pointer",
      }}
      onClick={onOpen}
    />
  );
};

export default CDItem;