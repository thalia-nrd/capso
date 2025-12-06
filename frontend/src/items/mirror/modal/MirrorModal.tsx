import React, { useState } from "react";
import { getMirrorFact } from "../../../services/api/mirrorService";

interface MirrorModalProps {
  quote: string;
}

const MirrorModal: React.FC<MirrorModalProps> = ({ quote }) => {
  const [fact, setFact] = useState<string | null>(null);

  const getQuote = async () => {
    try {
      const res = await getMirrorFact("some-cabinet-id");
      setFact(res.fact);
    } catch (error) {
      console.error("Failed to fetch mirror fact:", error);
      setFact("Could not fetch a fact right now.");
    }
  };

  return (
    <div className="mirror-modal">
      <div className="mirror-content">
        <button onClick={getQuote}>
          mirror mirror on the wall...
        </button>

        {/* Only show fact/quote AFTER button is clicked */}
        {fact !== null && <p>{fact || quote}</p>}
      </div>
    </div>
  );
};

export default MirrorModal;