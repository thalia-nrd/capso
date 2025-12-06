import React, { useState } from "react";

interface KeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialItems?: string[];
  onSave: (items: string[]) => void;
}

const KeyModal: React.FC<KeyModalProps> = ({
  isOpen,
  onClose,
  initialItems = [],
  onSave
}) => {
  const [items, setItems] = useState(initialItems);

  if (!isOpen) return null;

  const updateItem = (i: number, value: string) => {
    const newItems = [...items];
    newItems[i] = value;
    setItems(newItems);
  };

  const addItem = () => setItems([...items, ""]);

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Key</h2>

        {items.map((item, idx) => (
          <input
            key={idx}
            value={item}
            onChange={(e) => updateItem(idx, e.target.value)}
            style={styles.input}
          />
        ))}

        <button onClick={addItem}>Add</button>

        <div style={{ marginTop: "20px" }}>
          <button onClick={() => onSave(items)}>Save</button>
          <button onClick={onClose} style={{ marginLeft: "10px" }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed" as const,
    top: 0, left: 0, right: 0, bottom: 0,
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
  }
};

export default KeyModal;