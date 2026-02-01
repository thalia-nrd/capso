import React, { useState, useEffect } from "react";
import {
  getKey,
  createKey,
  openKey,
  editKeyItems,
  Key,
} from "../service/keyService";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import "../styles/key.css";
import { uploadFileToCloudinary } from "../../../utils/uploadFiles";

interface KeyModalProps {
  frameId: string;
  onClose: () => void;
}

const KeyModal: React.FC<KeyModalProps> = ({ frameId, onClose }) => {
  const [keyData, setKeyData] = useState<Key | null>(null);
  const [loading, setLoading] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState(""); // NEW: Error state

  useEffect(() => {
    const loadKey = async () => {
      setLoading(true);
      try {
        const data = await getKey();
        setKeyData(data);
      } catch {
        setKeyData(null);
      } finally {
        setLoading(false);
      }
    };

    loadKey();
  }, []);

  const handleCreate = async () => {
    if (!passcode.trim()) {
      setError("✨ You need a passcode to start your Keybox magic!");
      return;
    }

    setLoading(true);
    try {
      const created = await createKey(passcode);
      setKeyData(created);
      setIsOpened(true);
      setPasscode("");
      setError("");
    } catch (err: any) {
      setError(err?.message || "Oops… something went wrong 🪄");
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = async () => {
    if (!passcode.trim()) {
      setError("Enter your passcode to unlock the magic ✨");
      return;
    }

    setLoading(true);
    try {
      const opened = await openKey(Number(frameId), passcode);
      setKeyData(opened);
      setIsOpened(true);
      setPasscode("");
      setError("");
    } catch (err: any) {
      setError(err?.message || "Wrong passcode! Try again 🪄");
    } finally {
      setLoading(false);
    }
  };

  const uploadFileItem = async () => {
    if (!file || !keyData) return;

    // Reset previous error
    setError("");
    setLoading(true);

    try {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit example
        throw new Error("File is too big! Max 5MB ✨");
      }
      if (!file.type.startsWith("image/")) {
        throw new Error("Invalid format! Only images allowed 🖼");
      }

      const uploaded = await uploadFileToCloudinary(file, frameId);

      setKeyData({
        ...keyData,
        items: [
          ...keyData.items,
          {
            type: "image",
            name: file.name,
            url: uploaded.secure_url,
            createdAt: new Date().toISOString(),
            uploadedAt: new Date().toISOString(),
          },
        ],
      });

      setFile(null);
    } catch (err: any) {
      setError(err?.message || "Upload failed ✨");
    } finally {
      setLoading(false);
    }
  };

  const saveItems = async () => {
    if (!keyData) return;
    setLoading(true);
    setError("");

    try {
      const updated = await editKeyItems(Number(frameId), keyData.items);
      setKeyData(updated);
    } catch (err: any) {
      setError(err?.message || "Saving failed ✨");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setPasscode("");
    setIsOpened(false);
    setKeyData(null);
    setError("");
    onClose();
  };

  return (
    <div className="key-modal-container">
      <DialogPrimitive.Close asChild>
        <button className="close-button" onClick={handleClose}>
          x
        </button>
      </DialogPrimitive.Close>

      <div className="key-modal">
        {loading && <p>Loading...</p>}

        {/* CREATE */}
        {!loading && !keyData && (
          <div className="key-panel center">
            {error && <p className="key-error">{error}</p>}
            <input
              type="password"
              placeholder="Set a passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
            />
            <button onClick={handleCreate}>Create</button>
          </div>
        )}

        {/* LOCKED */}
        {!loading && keyData && !isOpened && (
          <div className="key-panel center">
            {error && <p className="key-error">{error}</p>}
            <input
              type="password"
              placeholder="Enter passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
            />
            <button onClick={handleOpen}>Unlock</button>
          </div>
        )}

        {/* OPENED */}
        {!loading && keyData && isOpened && (
          <div className="key-panel">
            {error && <p className="key-error">{error}</p>}

            <div className="key-items">
              {keyData.items.map((item, i) => (
                <div key={i} className="key-item">
                  {item.type === "text" && <p>{item.name}</p>}
                  {item.type === "image" && (
                    <a href={item.url} target="_blank" rel="noreferrer">
                      🖼 {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="key-editor">
              <input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />

              <div className="key-editor-buttons">
                <button onClick={uploadFileItem} disabled={!file}>
                  Upload File
                </button>

                <button onClick={saveItems}>
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KeyModal;