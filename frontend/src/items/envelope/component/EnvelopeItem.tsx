import React, { useState } from "react";
import EnvelopeModal from "../modal/EnvelopeModal";
import "../styles/envelope.css";

interface EnvelopeItemProps {
  frameId: any;
}

const EnvelopeItem: React.FC<EnvelopeItemProps> = ({ frameId }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="envelope-wrapper">
      <img
        src="/content/envelope.png"
        alt="envelope"
        className="envelope-base"
        onClick={() => setOpen(true)}
      />
      {open && <EnvelopeModal frameId={frameId} />}
    </div>
  );
};

export default EnvelopeItem;