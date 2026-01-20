import React, { useState } from "react";
import ChecklistModal from "../modal/ChecklistModal";
import "../styles/checklist.css";

interface ChecklistItemProps {
  frameId?: any;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ frameId }) => {
  const [open, setOpen] = useState(false);

  const save = (items: string[]): void => {
    console.log("Saving checklist items:", items);
    // TODO: Implement API call to save items to backend
    // Example: await api.saveChecklist(frameId, items);
  };

  return (
    <>
      <img
        src="/content/checklist.png"
        alt="checklist"
        className="checklist-base"
        onClick={() => setOpen(true)}
      />
      {open && (
        <ChecklistModal frameId={frameId} isOpen={open} onSave={save} onClose={() => setOpen(false)} />
      )}
    </>
  );
};

export default ChecklistItem;