import React from "react";

interface ChecklistItemProps {
  onOpen: () => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ onOpen }) => {
  return (
    <img
      src="content/checklist.png"
      alt="checklist"
      style={{
        width: "100%",
        height: "100%",
        cursor: "pointer",
      }}
      onClick={onOpen}
    />
  );
};

export default ChecklistItem;