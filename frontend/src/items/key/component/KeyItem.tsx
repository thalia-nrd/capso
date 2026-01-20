import React, { useState } from "react";
import KeyModal from "../modal/KeyModal";
import "../styles/key.css";

interface KeyItemProps {
  frameId: any;
}

const KeyItem: React.FC<KeyItemProps> = ({ frameId }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src="/content/key.png"
        alt="key"
        className="key-base"
        style={{ cursor: "pointer", width: "100%", height: "100%" }}
        onClick={() => setOpen(true)}
      />

      {open && (
        <KeyModal
          frameId={frameId}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default KeyItem;