import React, { useState } from "react";
//import '../../styles/Frame.scss';
import Slot from "../../layout/Slot";
import ChecklistItem from "../../items/checklist/component/ChecklistItem";
import ChecklistModal from "../../items/checklist/modal/ChecklistModal";
import NoteItem from "../../items/note/component/NoteItem";
import EnvelopeItem from "../../items/envelope/component/EnvelopeItem";
import KeyItem from "../../items/key/component/KeyItem";
import PolaroidItem from "../../items/polaroid/component/PolaroidItem";
import CDItem from "../../items/cd/component/CDItem";
import MirrorItem from "../../items/mirror/component/MirrorItem";

const Frame: React.FC = () => {
  const [checklist, setChecklist] = useState<string[]>([]);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: 600,
        height: 800,
        backgroundImage: "url('/cabinet/cabinet.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: "0 auto",
      }}
    >
      <Slot x={180} y={200} width={120} height={140}>
        <ChecklistItem onOpen={() => setIsChecklistOpen(true)} />
      </Slot>

      <ChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
        initialItems={checklist}
        onSave={(newItems) => {
          setChecklist(newItems);
          setIsChecklistOpen(false);
        }}
      />

      <Slot x={350} y={200} width={120} height={140}>
        <NoteItem id="note1" imageSrc="content/postIts.png" title="Note" />
      </Slot>

      <Slot x={120} y={400} width={120} height={140}>
        <EnvelopeItem onOpen={() => alert("Envelope opened!")} />
      </Slot>
      <Slot x={300} y={400} width={120} height={140}>
        <KeyItem />
      </Slot>
      <Slot x={480} y={400} width={120} height={140}>
        <PolaroidItem imageSrc="content/polaroid.png" title="Polaroid" />
      </Slot>
      <Slot x={200} y={600} width={120} height={140}>
        <CDItem imageSrc="content/cd.png" title="CD" />
      </Slot>
      <Slot x={400} y={600} width={120} height={140}>
        <MirrorItem imageSrc="content/mirror.png" title="Mirror" />
      </Slot>
    </div>
  );
};

export default Frame;
