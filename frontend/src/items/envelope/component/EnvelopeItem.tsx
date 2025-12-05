import React from "react";

interface EnvelopeItemProps {
  onOpen: () => void;
}

const EnvelopeItem: React.FC<EnvelopeItemProps> = ({ onOpen }) => {
  return (
    <img
      src="content/envelope.png"
      alt="envelope"
      style={{
        width: "100%",
        height: "100%",
        cursor: "pointer",
      }}
      onClick={onOpen}
    />
  );
};

export default EnvelopeItem;