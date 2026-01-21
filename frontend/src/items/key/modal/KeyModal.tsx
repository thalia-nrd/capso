import React, { useState, useEffect } from "react";
import {
  getKey,
  createKey,
  openKey,
  editKeyItems,
  Key
} from "../service/keyService";
import { Dialog } from "../../../components/Dialog";
import "../styles/key.css";
import { uploadFileToCloudinary } from "../../../utils/uploadFiles";

interface KeyModalProps {
  frameId: string; 
  onClose: () => void;
}

const KeyModal: React.FC<KeyModalProps> = ({ frameId, onClose }) => {
  const [key, setKey] = useState<Key | null>(null);
  const [loading, setLoading] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [isOpened, setIsOpened] = useState(false);

  const [newItem, setNewItem] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Load keybox
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await getKey();
        setKey(data);
      } catch {
        setKey(null);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  // CREATE
  const handleCreate = async () => {
    if (!passcode.trim()) return;
    setLoading(true);

    try {
      const created = await createKey(passcode);
      setKey(created);
      setIsOpened(true);
    } finally {
      setLoading(false);
    }
  };

  // OPEN
  const handleOpen = async () => {
    if (!passcode.trim()) return;
    setLoading(true);

    try {
      const opened = await openKey(Number(frameId), passcode);
      setKey(opened);
      setIsOpened(true);
    } finally {
      setLoading(false);
    }
  };

  // Add text item
  const addTextItem = () => {
    if (!newItem.trim() || !key) return;

    const updatedItems = [
      ...key.items,
      {
        type: "text",
        name: newItem,
        description: newItem,
        url: undefined,
        createdAt: new Date().toISOString(),
        uploadedAt: new Date().toISOString()
      }
    ];

    setKey({ ...key, items: updatedItems });
    setNewItem("");
  };

  // Upload file item
  const uploadFileItem = async () => {
    if (!selectedFile || !key) return;

    setLoading(true);
    try {
      const uploaded = await uploadFileToCloudinary(selectedFile, frameId);

      const fileItem = {
        type: "image",
        name: selectedFile.name,
        url: uploaded.secure_url,
        createdAt: new Date().toISOString(),
        uploadedAt: new Date().toISOString()
      };

      setKey({ ...key, items: [...key.items, fileItem] });
      setSelectedFile(null);
    } finally {
      setLoading(false);
    }
  };

  // SAVE
  const saveItems = async () => {
    if (!key) return;

    setLoading(true);
    try {
      const updated = await editKeyItems(Number(frameId), key.items, passcode);
      setKey(updated);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="envelope-modal">
      <div className="envelope-content">
        {loading && <p>Loading...</p>}

        {/* CREATE */}
        {!loading && !key && (
          <>
            <h3>Create a Password</h3>
            <input
              type="password"
              placeholder="Set passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
            />
            <button onClick={handleCreate}>Create Keybox</button>
          </>
        )}

        {/* ENTER PASSCODE */}
        {!loading && key && !isOpened && (
          <>
            <h3>Unlock</h3>
            <input
              type="password"
              placeholder="Passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
            />
            <button onClick={handleOpen}>Open</button>
          </>
        )}

        {/* OPENED */}
        {!loading && key && isOpened && (
          <>
            <h3>Your Secret Files</h3>

            <ul>
              {key.items.map((item, idx) => (
                <li key={idx}>
                  {item.type === "text" && <span>{item.name}</span>}
                  {item.type === "image" && (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      🖼️ {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* TEXT INPUT */}
            <input
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Add text..."
            />
            <button onClick={addTextItem}>Add Text</button>

            {/* FILE UPLOAD */}
            <input
              type="file"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
            />
            <button onClick={uploadFileItem} disabled={!selectedFile}>
              Upload File
            </button>

            <button onClick={saveItems}>
              {loading ? "Saving..." : "Save Items"}
            </button>
          </>
        )}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default KeyModal;