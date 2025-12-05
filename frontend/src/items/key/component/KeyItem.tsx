import React from "react";

interface KeyItemProps {
  onOpen: () => void;
}

const KeyItem: React.FC<KeyItemProps> = ({ onOpen }) => {
  return (
    <img
      src="content/Key.png"
      alt="Key"
      style={{
        width: "100%",
        height: "100%",
        cursor: "pointer",
      }}
      onClick={onOpen}
    />
  );
};

export default KeyItem;