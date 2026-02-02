import React from "react";
import "../styles/key.css";

interface KeyItemProps {
  onOpen: () => void;
}

const KeyItem: React.FC<KeyItemProps> = ({ onOpen }) => {
  return (
    <img
      src="/content/key.png"
      alt="key"
      className="key-base"
      onClick={onOpen}
    />
  );
};

export default KeyItem;