import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Slot from "../../../layout/Slot";
import DuckItem from "../../../items/checklist/component/DuckItem";
import NoteItem from "../../../items/note/component/NoteItem";
import EnvelopeItem from "../../../items/envelope/component/EnvelopeItem";
import KeyItem from "../../../items/key/component/KeyItem";
import PolaroidItem from "../../../items/polaroid/component/PolaroidItem";
import ClockItem from "../../../items/clock/component/ClockItem";
import MirrorItem from "../../../items/mirror/component/MirrorItem";

import NotesModal from "../../../items/note/modal/NoteModal";
import KeyModal from "../../../items/key/modal/KeyModal";
import EnvelopeModal from "../../../items/envelope/modal/EnvelopeModal";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../components/Dialog";

import { getUserFrame, FullFrame } from "../../../services/frame/frameService";
import "./Frame.css";

type ActiveItem = "notes" | "key" | "envelope" | null;

const CapsoIntro: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="capsule-intro-overlay">
      <div className="capsule-intro-card">
        <h2>Welcome to Capso</h2>
        <p>This is your frame :) a little magical capsule to keep things you care about</p>
        <ul className="capsule-intro-list">
          <li>
            <span className="item-name">clock</span>
          </li>
          <li>
            <span className="item-name">notes</span> — jot down quick thoughts anytime.
          </li>
          <li>
            <span className="item-name">mirror</span> — talk to the mirror, and it might tell you something
          </li>
          <li>
            <span className="item-name">key</span> — lock away files and images you want safe.
          </li>
          <li>
            <span className="item-name">polaroid</span> — pin a single image to your frame as a memory.
          </li>
          <li>
            <span className="item-name">envelope</span> — your private journal, sealed with a passcode.
          </li>
          <li>
            <span className="item-name">quack</span>
          </li>
        </ul>
        <button onClick={onClose}>Got it!</button>
      </div>
    </div>
  );
};

const Frame: React.FC = () => {
  const navigate = useNavigate();

  const [frame, setFrame] = useState<FullFrame | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeItem, setActiveItem] = useState<ActiveItem>(null);
  const [showIntro, setShowIntro] = useState(false);

  // Load the frame and check intro

  useEffect(() => {
    const seenIntro = localStorage.getItem("hasSeenCapsoIntro");
    if (seenIntro !== "true") { // show intro if not "true"
      setShowIntro(true);
    }
  }, []);

  useEffect(() => {
    getUserFrame()
      .then((data) => {
        setFrame(data);
      })
      .catch(() => navigate("/login"))
      .finally(() => setLoading(false));
  }, [navigate]);

  if (loading || !frame) {
    return <div>loading...</div>;
  }

  return (
    <div className="frame-wrapper">
      {/* CAPSO INTRO */}
      {showIntro && (
        <CapsoIntro
          onClose={() => {
            localStorage.setItem("hasSeenCapsoIntro", "true");
            setShowIntro(false);
          }}
        />
      )}

      {/* FRAME STAGE */}
      <div
        className={`frame-stage ${activeItem ? "dimmed" : ""}`}
        style={{
          width: 800,
          height: 900,
          backgroundImage: "url('/frame/frame.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Slot x={250} y={220} width={130} height={150}>
          <ClockItem frameId={frame.id} />
        </Slot>

        <Slot x={450} y={240} width={100} height={100}>
          <NoteItem onOpen={() => setActiveItem("notes")} />
        </Slot>

        <Slot x={210} y={400} width={105} height={100}>
          <MirrorItem frameId={frame.id} />
        </Slot>

        <Slot x={365} y={400} width={80} height={100}>
          <KeyItem onOpen={() => setActiveItem("key")} />
        </Slot>

        <Slot x={491} y={410} width={112} height={100}>
          <PolaroidItem frameId={frame.id} />
        </Slot>

        <Slot x={260} y={548} width={120} height={100}>
          <EnvelopeItem onOpen={() => setActiveItem("envelope")} />
        </Slot>

        <Slot x={410} y={550} width={180} height={100}>
          <DuckItem frameId={frame.id} />
        </Slot>
      </div>

      {activeItem && <div className="frame-shadow-veil" />}

      {/* FRAME-ANCHORED PANEL */}
      <Dialog
        open={activeItem !== null}
        onOpenChange={() => setActiveItem(null)}
        modal={false}
      >
        <DialogContent className="frame-panel zoom-panel" data-frame-panel>
          {activeItem === "notes" && (
            <>
              <DialogHeader className="frame-panel-header">
                <DialogTitle className="dialog-title">Your Notes</DialogTitle>
              </DialogHeader>

              <NotesModal frameId={frame.id} />
            </>
          )}

          {activeItem === "key" && (
            <>
              <DialogHeader className="frame-panel-header">
                <DialogTitle className="dialog-title">Your Keybox</DialogTitle>
              </DialogHeader>

              <KeyModal
                frameId={frame.id.toString()}
                onClose={() => setActiveItem(null)}
              />
            </>
          )}

          {activeItem === "envelope" && (
            <>
              <DialogHeader className="frame-panel-header">
                <DialogTitle className="dialog-title">Your Envelope</DialogTitle>
              </DialogHeader>

              <EnvelopeModal
                frameId={frame.id.toString()}
                onClose={() => setActiveItem(null)}
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Frame;