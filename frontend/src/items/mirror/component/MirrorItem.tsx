import React, { useState } from "react";
import MirrorModal from "../modal/MirrorModal";
import "../styles/mirror.css";

interface MirrorItemProps {
  frameId: any;
}

const MirrorItem: React.FC<MirrorItemProps> = ({ frameId }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src="/content/mirror.png"
        alt="mirror"
        className="mirror-base"
        onClick={() => setOpen(true)}
      />

      {open && (
        <MirrorModal frameId={frameId} />
      )}
    </>
  );
};

export default MirrorItem;