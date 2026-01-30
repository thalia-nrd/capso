import React, { useState, useEffect } from "react";
import {
  getPolaroid,
  createPolaroid,
  updatePolaroid,
} from "../service/polaroidService";
import { uploadImageToCloudinary } from "../../../utils/uploadImage";
import "../styles/polaroid.css";

interface PolaroidModalProps {
  frameId: string;
  setUrl: (url: string) => void;
  onClose: () => void;
}

const PolaroidModal: React.FC<PolaroidModalProps> = ({
  frameId,
  setUrl,
  onClose,
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  const [existingImage, setExistingImage] = useState<string | null>(null);

  // Load existing polaroid
  useEffect(() => {
    async function load() {
      try {
        const polaroids = await getPolaroid(frameId, "");
        if (polaroids.length > 0 && polaroids[0].url) {
          setExistingImage(polaroids[0].url);
        }
      } catch (err) {
        console.error("Failed to load existing polaroid", err);
      }
    }
    load();
  }, [frameId]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validTypes.includes(file.type)) {
      setError("Please upload a valid image (JPEG, PNG, GIF).");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5MB.");
      return;
    }

    try {
      setError("");
      setIsUploading(true);

      const result = await uploadImageToCloudinary(file, frameId);
      const imageUrl = result.secure_url;

      const polaroids = await getPolaroid(frameId, "");
      if (polaroids.length > 0) {
        await updatePolaroid(frameId, polaroids[0].id.toString(), imageUrl);
      } else {
        await createPolaroid(frameId, imageUrl);
      }

      setExistingImage(imageUrl);
      setUrl(imageUrl);
      onClose();
    } catch (err) {
      console.error(err);
      setError("Failed to upload image. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="polaroid-modal-overlay">
      <div className="polaroid-modal">
        <div className="polaroid-modal-header">
          <button
            id="polaroid-modal-close-btn"
            onClick={() => onClose()}>
              x
          </button>

          <h2>upload polaroid image</h2>
        </div>

        {error && <p className="polaroid-error">{error}</p>}

        {existingImage && (
          <img
            src={existingImage}
            alt="current polaroid"
          />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          disabled={isUploading}
        />

        {isUploading && <p className="polaroid-uploading">uploading…</p>}
      </div>
    </div>
  );
};

export default PolaroidModal;