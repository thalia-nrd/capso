import React from "react";
import "../styles/note.css";

interface NoteItemProps {
  id: number;
  content: string;
  isActive: boolean;
  onSelect: (id: number) => void;
}

const pastelFromId = (id: number) => {
  const hue = id * 137.508; // golden angle for nice distribution
  return `hsl(${hue % 360}, 70%, 85%)`;
};

const NoteItem: React.FC<NoteItemProps> = ({
  id,
  content,
  isActive,
  onSelect,
}) => {
  return (
    <div
      className={`note-item ${isActive ? "active" : ""}`}
      style={{
        backgroundColor: pastelFromId(id),
      }}
      onClick={() => onSelect(id)}
    >
      <p>{content.trim() ? content.slice(0, 60) : "(empty note)"}</p>
    </div>
  );
};

export default NoteItem;