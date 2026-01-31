import React, { useState, useRef } from "react";
import DuckModal from "../modal/DuckModal";
import "../styles/duck.css";

interface DuckItemProps {
  frameId: any;
}

const DuckItem: React.FC<DuckItemProps> = ({ frameId }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="duck-wrapper" ref={ref}>
      <img
        src="/content/toast.png"
        alt="duck"
        className="duck-base"
        onClick={() => setOpen((v) => !v)}
      />

      {open && (
        <DuckModal
          frameId={frameId}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default DuckItem;