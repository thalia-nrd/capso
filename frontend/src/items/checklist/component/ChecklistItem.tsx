import React, { useState } from "react";
import ChecklistModal from "../modal/ChecklistModal";

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
        src="content/checklist.png"
        alt="checklist"
        style={{
          width: "100%",
          height: "100%",
          cursor: "pointer",
        }}
        onClick={() => setOpen(true)}
      />
      {open && (
        <ChecklistModal frameId={frameId} isOpen={open} onSave={save} onClose={() => setOpen(false)} />
      )}
    </>
  );
};

export default ChecklistItem;