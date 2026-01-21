import React, { useEffect, useState } from "react";
import NotesModal from "../modal/NoteModal";
import { getNotes } from "../service/noteService";
import "../styles/note.css";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../components/Dialog";

interface NoteItemProps {
  frameId: any;
}

const NoteItem: React.FC<NoteItemProps> = ({ frameId }) => {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState<
    { id: number; content: string }[]
  >([]);

  useEffect(() => {
    if (!open) return;

    const loadNotes = async () => {
      try {
        const res = await getNotes(frameId);
        setNotes(res);
      } catch (err) {
        console.error("Failed to load notes:", err);
      }
    };

    loadNotes();
  }, [frameId, open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <img
          src="/content/postIts.png"
          alt="notes"
          className="note-base"
        />
      </DialogTrigger>

      <DialogContent className="note-dialog">
        <DialogHeader>
          <DialogTitle>Your Notes</DialogTitle>
        </DialogHeader>

        <NotesModal
          frameId={frameId}
          notes={notes}
          setNotes={setNotes}
        />
      </DialogContent>
    </Dialog>
  );
};

export default NoteItem;