import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Slot from "../../../layout/Slot";
import ChecklistItem from "../../../items/checklist/component/ChecklistItem";
import NoteItem from "../../../items/note/component/NoteItem";
import EnvelopeItem from "../../../items/envelope/component/EnvelopeItem";
import KeyItem from "../../../items/key/component/KeyItem";
import PolaroidItem from "../../../items/polaroid/component/PolaroidItem";
import CDItem from "../../../items/cd/component/CDItem";
import MirrorItem from "../../../items/mirror/component/MirrorItem";

import { getUserFrame, FullFrame } from "../../../services/frame/frameService";

const Frame: React.FC = () => {
  const navigate = useNavigate();

  const [frame, setFrame] = useState<FullFrame | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserFrame()
      .then(setFrame)
      .catch(() => navigate("/login"))
      .finally(() => setLoading(false));
  }, [navigate]);

  if (loading || !frame) {
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
        <ChecklistItem frameId={frame.id} />
      </Slot>

      <Slot x={400} y={200} width={120} height={140}>
        <NoteItem frameId={frame.id} />
      </Slot>

      <Slot x={120} y={400} width={120} height={140}>
        <EnvelopeItem frameId={frame.id} />
      </Slot>

      <Slot x={300} y={400} width={120} height={140}>
        <KeyItem frameId={frame.id} />
      </Slot>

      <Slot x={480} y={400} width={120} height={140}>
        <PolaroidItem frameId={frame.id} />
      </Slot>

      <Slot x={200} y={600} width={120} height={140}>
        <CDItem onOpen={() => alert("CD opened!")} />
      </Slot>

      <Slot x={400} y={600} width={120} height={140}>
        <MirrorItem frameId={frame.id} />
      </Slot>
    </div>
  );
};

export default Frame;