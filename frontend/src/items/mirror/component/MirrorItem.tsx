import React, { useState } from "react";
import MirrorModal from "../modal/MirrorModal";

const MirrorItem: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src="content/Mirror.png"
        alt="Mirror"
        style={{
          width: "100%",
          height: "100%",
          cursor: "pointer",
        }}
        onClick={() => setOpen(true)}
      />

      {open && (
        <MirrorModal quote="yo mama" />
      )}
    </>
  );
};

export default MirrorItem;