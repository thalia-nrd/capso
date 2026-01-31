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

  const handleDuckClick = async () => {
    setLoading(true);

    // quack
    quackSound.currentTime = 0;
    quackSound.play().catch(() => {});

    try {
      const res = await getRandomDuck(frameId);
      setDuckUrl(res.duckUrl);
    } catch (err) {
      console.error("duck failed to arrive", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="duck-modal fullscreen">
      <button className="duck-close" onClick={onClose}>×</button>

      {!duckUrl && (
        <button className="duck-button" onClick={handleDuckClick}>
          {loading ? "do not feed wild animals" : "throw bread"}
        </button>
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