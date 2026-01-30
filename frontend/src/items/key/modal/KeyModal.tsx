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
    if (!passcode.trim()) return;
    setLoading(true);

    try {
      const created = await createKey(passcode);
      setKeyData(created);
      setIsOpened(true);
      setPasscode("");
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = async () => {
    if (!passcode.trim()) return;
    setLoading(true);

    try {
      const opened = await openKey(Number(frameId), passcode);
      setKeyData(opened);
      setIsOpened(true);
      setPasscode("");
    } finally {
      setLoading(false);
    }
  };

  const uploadFileItem = async () => {
    if (!file || !keyData) return;
    setLoading(true);

    try {
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
    } finally {
      setLoading(false);
    }
  };

  const saveItems = async () => {
    if (!keyData) return;
    setLoading(true);

    try {
      const updated = await editKeyItems(
        Number(frameId),
        keyData.items,
      );
      setKeyData(updated);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setPasscode("");      // clear sensitive data
    setIsOpened(false);   // reset state
    setKeyData(null);     // optional
    onClose();            // close dialog
  };


  return (
    <div className="key-modal-container">
      <DialogPrimitive.Close asChild>
        <button className="close-button" onClick={handleClose}>x</button>
      </DialogPrimitive.Close>

      <div className="key-modal">
        {loading && <p>Loading...</p>}

        {/* CREATE */}
        {!loading && !keyData && (
          <div className="key-panel center">
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