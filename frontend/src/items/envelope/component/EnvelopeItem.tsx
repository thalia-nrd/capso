import React, { useState } from "react";
import "../styles/envelope.css";

interface EnvelopeItemProps {
  onOpen: () => void;
}

const EnvelopeItem: React.FC<EnvelopeItemProps> = ({ onOpen }) => {
  return (
    <img
      src="/content/envelope.png"
      alt="envelope"
      className="envelope-base"
      onClick={onOpen}
      style={{ cursor: "pointer", width: "100%", height: "100%" }}
    />
  );
};

export default EnvelopeItem;