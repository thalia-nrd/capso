import React, { useState, useEffect } from "react";
//import '../../styles/Frame.scss';
import Slot from "../../../layout/Slot";
import ChecklistItem from "../../../items/checklist/component/ChecklistItem";
import ChecklistModal from "../../../items/checklist/modal/ChecklistModal";
import NoteItem from "../../../items/note/component/NoteItem";
import EnvelopeItem from "../../../items/envelope/component/EnvelopeItem";
import KeyItem from "../../../items/key/component/KeyItem";
import PolaroidItem from "../../../items/polaroid/component/PolaroidItem";
import CDItem from "../../../items/cd/component/CDItem";
import MirrorItem from "../../../items/mirror/component/MirrorItem";

import { useParams } from "react-router-dom";
import { getUserFrame } from "../../../services/frame/frameService";

const Frame: React.FC = () => {
  const [checklist, setChecklist] = useState<string[]>([]);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);

  const { frameId } = useParams();
  const [frame, setFrame] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!frameId) return;

    getUserFrame(frameId)
      .then((data: any) => {
        setFrame(data);
      })
      .catch((err: any) => {
        console.error("Failed to load frame:", err);
      })
      .finally(() => setLoading(false));
  }, [frameId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        position: "relative",
        width: 700,
        height: 900,
        backgroundImage: "url('/frame/frame.png')",
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
        <NoteItem frameId={frameId!} />
      </Slot>

      <Slot x={120} y={400} width={120} height={140}>
        <EnvelopeItem onOpen={() => alert("Envelope opened!")} />
      </Slot>
      <Slot x={300} y={400} width={120} height={140}>
        <KeyItem onOpen={() => alert("Key opened!")} />
      </Slot>
      <Slot x={480} y={400} width={120} height={140}>
        <PolaroidItem onOpen={() => alert("Polaroid opened!")} />
      </Slot>
      <Slot x={200} y={600} width={120} height={140}>
        <CDItem onOpen={() => alert("CD opened!")} />
      </Slot>
      <Slot x={400} y={600} width={120} height={140}>
        <MirrorItem frameId={frameId!} />
      </Slot>

    </div>
  );
};

export default Frame;
