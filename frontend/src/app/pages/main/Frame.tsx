import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Slot from "../../../layout/Slot";
import ChecklistItem from "../../../items/checklist/component/ChecklistItem";
import NoteItem from "../../../items/note/component/NoteItem";
import EnvelopeItem from "../../../items/envelope/component/EnvelopeItem";
import KeyItem from "../../../items/key/component/KeyItem";
import PolaroidItem from "../../../items/polaroid/component/PolaroidItem";
import ClockItem from "../../../items/clock/component/ClockItem";
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
        width: 800,
        height: 900,
        backgroundImage: "url('/frame/frame.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: "0 auto",
      }}
    >
      <Slot x={250} y={220} width={120} height={140}>
        <ClockItem frameId={frame.id} />
      </Slot>

      <Slot x={450} y={200} width={80} height={100}>
        <NoteItem frameId={frame.id} />
      </Slot>

      <Slot x={200} y={400} width={80} height={100}>
        <EnvelopeItem frameId={frame.id} />
      </Slot>

      <Slot x={355} y={400} width={80} height={100}>
        <KeyItem frameId={frame.id} />
      </Slot>

      <Slot x={505} y={410} width={60} height={80}>
        <PolaroidItem frameId={frame.id} />
      </Slot>

      <Slot x={250} y={550} width={100} height={100}>
        <ChecklistItem frameId={frame.id} />
      </Slot>

      <Slot x={450} y={550} width={80} height={100}>
        <MirrorItem frameId={frame.id} />
      </Slot>
    </div>
  );
};

export default Frame;