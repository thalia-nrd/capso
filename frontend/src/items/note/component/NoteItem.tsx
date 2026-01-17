import React, { useState, useEffect } from "react";
import NotesModal from "../modal/NoteModal";
import { getNotes } from "../service/noteService";

interface NoteItemProps {
  frameId: any;
}

const NoteItem: React.FC<NoteItemProps> = ({ frameId }) => {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState<
    { id: number; content: string }[]
  >([]);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const res = await getNotes(frameId);
        setNotes(res);
      } catch (err) {
        console.error("Failed to load notes:", err);
      }
    };
    loadNotes();
  }, [frameId]);

  return (
    <>
      <img
        src="content/postIts.png"
        alt="Notes"
        style={{ width: "100%", height: "100%", cursor: "pointer" }}
        onClick={() => setOpen(true)}
      />

      {open && (
        <NotesModal
          frameId={frameId}
          notes={notes}
          setNotes={setNotes}
        />
      )}
    </>
  );
};

export default NoteItem;