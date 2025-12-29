import React, { useEffect, useState } from "react";
import PolaroidModal from "../modal/PolaroidModal";
import { getPolaroid } from "../service/polaroidService";
import "../styles/polaroid.css";

interface PolaroidItemProps {
  frameId: string;
}

const PolaroidItem: React.FC<PolaroidItemProps> = ({ frameId }) => {
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    const loadPolaroid = async () => {
      try {
        const polaroids = await getPolaroid(frameId);
        if (polaroids.length > 0) {
          setImageUrl(polaroids[0].imageUrl);
        }
      } catch (err) {
        console.error("Failed to load polaroid:", err);
      }
    };

    loadPolaroid();
  }, [frameId]);

  return (
    <>
      <div className="polaroid-wrapper">
        <img
          src="/content/Polaroid.png"
          alt="Polaroid frame"
          className="polaroid-base"
        />

        <div className="polaroid-content">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Uploaded"
              className="polaroid-photo"
            />
          ) : (
            <button
              className="polaroid-upload-btn"
              onClick={() => setOpen(true)}
            >
              Upload photo
            </button>
          )}
        </div>
      </div>

      {open && (
        <PolaroidModal
          frameId={frameId}
          setUrl={setImageUrl}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default PolaroidItem;
