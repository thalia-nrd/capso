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
    />
  );
};

export default EnvelopeItem;