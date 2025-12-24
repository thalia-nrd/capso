import React, { useState } from "react";
import { getMirrorFact } from "../service/mirrorService";

interface MirrorModalProps {
  frameId: string;
}

const MirrorModal: React.FC<MirrorModalProps> = ({ frameId }) => {
  const [fact, setFact] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    try {
      const res = await getMirrorFact(frameId);
      setFact(res.fact); // only the text
    } catch (error) {
      console.error("Your magic mirror is asleep", error);
      setFact("Could not fetch a fact right now.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mirror-modal">
      <div className="mirror-content">
        <button onClick={fetchFact}>
          mirror mirror on the wall...
        </button>

        {loading && <p>✨ consulting the magic mirror...</p>}
        {!loading && fact && <p>{fact}</p>}
      </div>
    </div>
  );
};

export default MirrorModal;