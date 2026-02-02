import React, { useState, useRef } from "react";
import MirrorPopover from "../modal/MirrorModal";
import "../styles/mirror.css";

interface MirrorItemProps {
  frameId: any;
}

const MirrorItem: React.FC<MirrorItemProps> = ({ frameId }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="mirror-wrapper" ref={ref}>
      <img
        src="/content/mirrorImg.png"
        alt="mirror"
        className="mirror-base"
        onClick={() => setOpen((v) => !v)}
      />

      {open && (
        <MirrorPopover
          frameId={frameId}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default MirrorItem;