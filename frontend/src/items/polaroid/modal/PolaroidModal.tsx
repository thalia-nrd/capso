import React, { useState, useEffect } from "react";
import {
  getPolaroid,
  createPolaroid,
  updatePolaroid,
} from "../service/polaroidService";
import { uploadImageToCloudinary } from "../../../utils/uploadImage";

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

  // 1️⃣ Load existing polaroid on mount
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

  const handleImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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

      // 2️⃣ Upload to Cloudinary
      const result = await uploadImageToCloudinary(file, frameId);
      const imageUrl = result.secure_url;

      // 3️⃣ Save to DB
      const polaroids = await getPolaroid(frameId, "");
      if (polaroids.length > 0) {
        await updatePolaroid(frameId, polaroids[0].id.toString(), imageUrl);
      } else {
        await createPolaroid(frameId, imageUrl);
      }

      // 4️⃣ Update UI
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
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Upload Polaroid Image</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* 5️⃣ Show current image */}
        {existingImage && (
          <img
            src={existingImage}
            alt="Current Polaroid"
            style={{ width: "100%", borderRadius: "6px", marginBottom: "10px" }}
          />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          disabled={isUploading}
          style={styles.input}
        />

        {isUploading && <p>Uploading…</p>}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    minWidth: "300px",
  },
  input: {
    width: "100%",
    marginBottom: "10px",
    padding: "6px",
  },
};

export default PolaroidModal;