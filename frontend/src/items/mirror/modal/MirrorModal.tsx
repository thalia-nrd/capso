import React, { useState } from "react";
import { getMirrorFact } from "../service/mirrorService";
import "../styles/mirror.css";

interface MirrorPopoverProps {
  frameId: any;
  onClose: () => void;
}

const MirrorPopover: React.FC<MirrorPopoverProps> = ({ frameId, onClose }) => {
  const [fact, setFact] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    try {
      const res = await getMirrorFact(frameId);
      setFact(res.fact);
    } catch {
      setFact("the mirror is silent today…");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mirror-popover">
      <button className="mirror-close" onClick={onClose}>×</button>
      
      <div className="mirror-content">
        <span className="mirror-sparkle">✦</span>

        <button className="mirror-ask" onClick={fetchFact}>
          mirror mirror on the wall…
        </button>

        <span className="mirror-sparkle">✧</span>
      </div>
      {!loading && fact && <p className="mirror-fact">{fact}</p>}
    </div>
  );
};

export default MirrorPopover;