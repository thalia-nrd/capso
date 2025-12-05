import React, { useState, useEffect } from "react";

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;         // unique key for localStorage
  title?: string;
  onSave?: () => void; // optional callback if needed
}

const NoteModal: React.FC<NoteModalProps> = ({
  isOpen,
  onClose,
  id,
  title = "Note",
  onSave
}) => {
  const [text, setText] = useState("");

  // Load saved note on mount
  useEffect(() => {
    if (!isOpen) return; // load only when modal opens (optional)
    const saved = localStorage.getItem(`note-${id}`);
    if (saved) setText(saved);
  }, [id, isOpen]);

  const saveNote = () => {
    localStorage.setItem(`note-${id}`, text);
    onSave?.();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-[#fffefb] p-6 rounded-lg w-[340px] flex flex-col gap-4 shadow-xl">
        <h2 className="text-xl font-semibold">{title}</h2>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your note..."
          className="w-full h-40 p-2 border border-gray-300 rounded"
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 bg-gray-200 rounded">
            Close
          </button>
          <button onClick={saveNote} className="px-3 py-1 bg-yellow-300 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;