import React, { useState } from "react";
import EnvelopeModal from "../modal/EnvelopeModal";

interface EnvelopeItemProps {
  frameId: string;
}

const EnvelopeItem: React.FC<EnvelopeItemProps> = ({ frameId }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src="content/envelope.png"
        alt="Journal Envelope"
        style={{ width: "100%", height: "100%", cursor: "pointer" }}
        onClick={() => setOpen(true)}
      />
      {open && <EnvelopeModal frameId={frameId} />}
    </>
  );
};

export default EnvelopeItem;