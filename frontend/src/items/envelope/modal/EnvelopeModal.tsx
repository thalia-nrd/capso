import React, { useState, useEffect } from "react";
import {
  Journal,
  JournalEntry,
  getJournal,
  createJournal,
  openJournal,
  editJournalEntries,
} from "../service/envelopeService";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import "../styles/envelope.css";

interface EnvelopeModalProps {
  frameId: string;
  onClose: () => void;
}

const groupEntriesByDay = (entries: JournalEntry[]) => {
  const groups: Record<string, JournalEntry[]> = {};

  entries.forEach((entry) => {
    const day = new Date(entry.createdAt).toDateString();
    if (!groups[day]) groups[day] = [];
    groups[day].push(entry);
  });

  return Object.entries(groups).sort(
    ([a], [b]) => new Date(a).getTime() - new Date(b).getTime()
  );
};

const EnvelopeModal: React.FC<EnvelopeModalProps> = ({ frameId, onClose }) => {
  const [journal, setJournal] = useState<Journal | null>(null);
  const [loading, setLoading] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [newEntry, setNewEntry] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [error, setError] = useState(""); // ERROR STATE

  useEffect(() => {
    const loadJournal = async () => {
      setLoading(true);
      try {
        const data = await getJournal(frameId);
        setJournal(data);
      } catch {
        setJournal(null);
      } finally {
        setLoading(false);
      }
    };

    loadJournal();
  }, [frameId]);

  const handleCreate = async () => {
    if (!passcode.trim()) {
      setError("You need a passcode to open this magical capsule ✨");
      return;
    }
    if (passcode.length < 6) {
      setError("Your passcode must be at least 6 characters long 🪄");
      return;
    }

    setLoading(true);
    try {
      const created = await createJournal(frameId, passcode);
      setJournal(created);
      setIsOpened(true);
      setPasscode("");
      setError(""); // clear error
    } catch (err: any) {
      setError(err?.message || "Hmm… something went wrong 💫");
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = async () => {
    if (!passcode.trim()) {
      setError("Enter your passcode to unlock the magic ✨");
      return;
    }

    setLoading(true);
    try {
      const opened = await openJournal(frameId, passcode);
      setJournal(opened);
      setIsOpened(true);
      setPasscode("");
      setError(""); // clear error
    } catch (err: any) {
      setError(err?.message || "Oops! Wrong passcode, try again 🪄");
    } finally {
      setLoading(false);
    }
  };

  const addEntry = () => {
    if (!newEntry.trim() || !journal) return;

    const updatedEntries = [
      ...journal.entries,
      {
        content: newEntry,
        createdAt: new Date().toISOString(),
      },
    ];

    setJournal({ ...journal, entries: updatedEntries });
    setNewEntry("");

    const grouped = groupEntriesByDay(updatedEntries);
    setCurrentDayIndex(grouped.length - 1);
  };

  const saveEntries = async () => {
    if (!journal) return;
    setLoading(true);

    try {
      const updated = await editJournalEntries(frameId, journal.entries);
      setJournal(updated);
    } finally {
      setLoading(false);
    }
  };

  const days = journal ? groupEntriesByDay(journal.entries) : [];
  const currentDay = days[currentDayIndex];

  const handleClose = () => {
    setPasscode("");
    setIsOpened(false);
    setJournal(null);
    setError("");
    onClose();
  };

  return (
    <div className="envelope-modal-container">
      <DialogPrimitive.Close asChild>
        <button className="close-button" onClick={handleClose}>
          x
        </button>
      </DialogPrimitive.Close>

      <div className="envelope-modal">
        {loading && <p>Loading...</p>}

        {/* CREATE */}
        {!loading && !journal && (
          <div className="envelope-panel center">
            {error && <p className="envelope-error">{error}</p>}
            <input
              type="password"
              placeholder="set a passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
            />
            <button onClick={handleCreate}>create</button>
          </div>
        )}

        {/* LOCKED */}
        {!loading && journal && !isOpened && (
          <div className="envelope-panel center">
            {error && <p className="envelope-error">{error}</p>}
            <input
              type="password"
              placeholder="enter passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
            />
            <button onClick={handleOpen}>open</button>
          </div>
        )}

        {/* OPENED */}
        {!loading && journal && isOpened && (
          <div className="envelope-panel">
            <div className="journal-nav">
              <button
                onClick={() => setCurrentDayIndex((i) => Math.max(i - 1, 0))}
                disabled={currentDayIndex === 0}
              >
                ←
              </button>

              <h4>{currentDay?.[0]}</h4>

              <button
                onClick={() =>
                  setCurrentDayIndex((i) => Math.min(i + 1, days.length - 1))
                }
                disabled={currentDayIndex === days.length - 1}
              >
                →
              </button>
            </div>

            <div className="journal-page">
              {currentDay?.[1].map((entry, idx) => (
                <p key={idx} className="journal-entry">
                  {entry.content}
                </p>
              ))}
            </div>

            <textarea
              value={newEntry}
              onChange={(e) => setNewEntry(e.target.value)}
              placeholder="write something..."
            />

            <div className="journal-actions">
              <button onClick={addEntry}>add entry</button>
              <button onClick={saveEntries}>
                {loading ? "saving..." : "save"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnvelopeModal;