import React, { useState } from "react";
import { getRandomDuck } from "../service/duckService";
import "../styles/duck.css";

interface DuckModalProps {
  frameId: string;
  onClose: () => void;
}

const quackSound = new Audio("/sound/quack.mp3");

const DuckModal: React.FC<DuckModalProps> = ({ frameId, onClose }) => {
  const [duckUrl, setDuckUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // NEW: error state

  const handleDuckClick = async () => {
    setLoading(true);
    setError(""); // reset previous error

    // quack
    quackSound.currentTime = 0;
    quackSound.play().catch(() => {});

    try {
      const res = await getRandomDuck(frameId);
      setDuckUrl(res.duckUrl);
    } catch (err: any) {
      console.error("duck failed to arrive", err);
      setError("oh no! the duck is shy today 🦆✨");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="duck-modal fullscreen">
      <button className="duck-close" onClick={onClose}>×</button>

      {!duckUrl && (
        <>
          {error && <p className="duck-error">{error}</p>}
          <button className="duck-button" onClick={handleDuckClick} disabled={loading}>
            {loading ? "sound on for the loaf" : "throw bread 🍞"}
          </button>
        </>
      )}

      {duckUrl && (
        <img
          src={duckUrl}
          alt="Random duck"
          className="duck-image fullscreen"
          onClick={handleDuckClick}
        />
      )}
    </div>
  );
};

export default DuckModal;