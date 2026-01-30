import React, { useEffect, useState } from "react";
import PolaroidModal from "../modal/PolaroidModal";
import { getPolaroid } from "../service/polaroidService";
import "../styles/polaroid.css";

interface PolaroidItemProps {
  frameId: any;
}

const PolaroidItem: React.FC<PolaroidItemProps> = ({ frameId }) => {
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPolaroid = async () => {
      try {
        const polaroids = await getPolaroid(frameId, "");
        if (polaroids.length > 0) {
          setImageUrl(polaroids[0].url);
        } else {
          setImageUrl(null);
        }
      } catch (err) {
        console.error("Failed to load polaroid:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPolaroid();
  }, [frameId]);

  return (
    <>
      <div className="polaroid-wrapper">
        <img
          src="/content/polaroid.png"
          alt="polaroid"
          className="polaroid-base"
        />

        <div className="polaroid-content">
          {loading ? (
            <p className="polaroid-loading">loading...</p>
          ) : imageUrl ? (
            <img
              src={imageUrl}
              alt="Uploaded"
              className="polaroid-photo"
              onClick={() => setOpen(true)}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <button
              className="polaroid-upload-btn"
              onClick={() => setOpen(true)}
            >
              upload photo
            </button>
          )}
        </div>
      </div>

      {open && (
        <PolaroidModal
          frameId={frameId}
          setUrl={(url) => setImageUrl(url)}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default PolaroidItem;