import React, { useState } from "react";
import MirrorModal from "../modal/MirrorModal";

interface MirrorItemProps {
  frameId: any;
}

const MirrorItem: React.FC<MirrorItemProps> = ({ frameId }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src="content/Mirror.png"
        alt="Mirror"
        style={{ width: "100%", height: "100%", cursor: "pointer" }}
        onClick={() => setOpen(true)}
      />

      {open && (
        <MirrorModal frameId={frameId} />
      )}
    </>
  );
};

export default MirrorItem;