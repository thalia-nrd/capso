import React, { useState, useEffect } from "react";
import NotesModal from "../modal/NoteModal";
import { getNotes } from "../service/noteService";
import "../styles/note.css";

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
    <div className="note-wrapper">
      <img
        src="/content/postIts.png"
        alt="notes"
        className="note-base"
        onClick={() => setOpen(true)}
      />

      {open && (
        <NotesModal
          frameId={frameId}
          notes={notes}
          setNotes={setNotes}
        />
      )}
    </div>
  );
};

export default NoteItem;