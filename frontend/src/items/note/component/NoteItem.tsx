import React from "react";

interface NoteItemProps {
  onOpen: () => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ onOpen }) => {
  return (
    <img
      src="content/postIts.png"
      alt="Note"
      style={{
        width: "100%",
        height: "100%",
        cursor: "pointer",
      }}
      onClick={onOpen}
    />
  );
};

export default NoteItem;