import React, { useState, useEffect } from "react";
import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../service/noteService";
import "../styles/note.css";

interface Note {
  id: number;
  content: string;
}

interface NotesModalProps {
  frameId: any;
}

const NotesModal: React.FC<NotesModalProps> = ({ frameId }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Load notes when modal opens
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

  const selectNote = (id: number) => {
    const note = notes.find((n) => n.id === id);
    if (!note) return;
    setSelected(id);
    setContent(note.content);
  };

  const startNewNote = () => {
    setSelected(null);
    setContent("");
  };

  const saveNote = async () => {
    if (loading || !content.trim()) return;
    setLoading(true);

    try {
      if (selected !== null) {
        const updated = await updateNote(
          frameId,
          selected.toString(),
          content
        );
        setNotes((prev) =>
          prev.map((n) =>
            n.id === selected ? { ...n, content: updated.content } : n
          )
        );
      } else {
        const created = await createNote(frameId, content);
        setNotes((prev) => [...prev, created]);
        setSelected(created.id);
      }
    } catch (err) {
      console.error("Failed to save note:", err);
    } finally {
      setLoading(false);
    }
  };

  const removeNote = async () => {
    if (selected === null) return;

    try {
      await deleteNote(frameId, selected.toString());
      setNotes((prev) => prev.filter((n) => n.id !== selected));
      startNewNote();
    } catch (err) {
      console.error("Failed to delete note:", err);
    }
  };

  return (
    <div className="notes-modal">
      <div className="notes-panel">
        <button onClick={startNewNote}>+ New Note</button>

        <ul>
          {notes.map((note) => (
            <li
              key={note.id}
              onClick={() => selectNote(note.id)}
              className={selected === note.id ? "active" : ""}
            >
              {note.content.slice(0, 20) || "(empty)"}
            </li>
          ))}
        </ul>
      </div>

      <div className="editor-panel">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note..."
        />

        <button onClick={saveNote} disabled={loading || !content.trim()}>
          {loading ? "Saving..." : "Save"}
        </button>

        {selected !== null && (
          <button className="delete-btn" onClick={removeNote}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default NotesModal;