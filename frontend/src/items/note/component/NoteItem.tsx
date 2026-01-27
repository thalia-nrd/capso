import React from "react";
import "../styles/note.css";

interface NoteItemProps {
  onOpen: () => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ onOpen }) => {
  return (
    <img
      src="/content/postIts.png"
      alt="notes"
      className="note-base"
      onClick={onOpen}
    />
  );
};

export default NoteItem;