import React, { useState, useEffect } from "react";
import { Journal, JournalEntry, getJournal, createJournal, openJournal, editJournalEntries } from "../service/envelopeService";

interface EnvelopeModalProps {
  frameId: string;
}

const EnvelopeModal: React.FC<EnvelopeModalProps> = ({ frameId }) => {
  const [journal, setJournal] = useState<Journal | null>(null);
  const [loading, setLoading] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [newEntry, setNewEntry] = useState("");
  const [isOpened, setIsOpened] = useState(false);

  // check if journal exists
  useEffect(() => {
    const fetchJournal = async () => {
      setLoading(true);
      try {
        const data = await getJournal(frameId);
        setJournal(data);
      } catch (err) {
        console.log("No journal exists yet. Will need to create one.");
        setJournal(null);
      } finally {
        setLoading(false);
      }
    };
    fetchJournal();
  }, [frameId]);

  const handleCreateJournal = async () => {
    if (!passcode.trim()) return;
    setLoading(true);
    try {
      const newJournal = await createJournal(frameId, passcode);
      setJournal(newJournal);
      setIsOpened(true);
    } catch (err) {
      console.error("Failed to create journal:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenJournal = async () => {
    if (!passcode.trim()) return;
    setLoading(true);
    try {
      const opened = await openJournal(frameId, passcode);
      setJournal(opened);
      setIsOpened(true);
    } catch (err) {
      console.error("Failed to open journal:", err);
    } finally {
      setLoading(false);
    }
  };

  const addEntry = () => {
    if (!newEntry.trim() || !journal) return;
    const updatedEntries: JournalEntry[] = [
      ...journal.entries,
      { content: newEntry, createdAt: new Date().toISOString() },
    ];
    setJournal({ ...journal, entries: updatedEntries });
    setNewEntry("");
  };

  const saveEntries = async () => {
    if (!journal) return;
    setLoading(true);
    try {
      const updated = await editJournalEntries(frameId, journal.entries);
      setJournal(updated);
    } catch (err) {
      console.error("Failed to save entries:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="envelope-modal">
      <div className="envelope-content">
        {loading && <p>Loading...</p>}

        {!loading && !journal && (
          <>
            <h3>Create Your Journal</h3>
            <input
              type="password"
              placeholder="Set a passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
            />
            <button onClick={handleCreateJournal} disabled={!passcode.trim()}>
              {loading ? "Creating..." : "Create Journal"}
            </button>
          </>
        )}

        {!loading && journal && !isOpened && (
          <>
            <h3>Enter Passcode to Open Journal</h3>
            <input
              type="password"
              placeholder="Enter passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
            />
            <button onClick={handleOpenJournal} disabled={!passcode.trim()}>
              {loading ? "Opening..." : "Open Journal"}
            </button>
          </>
        )}

        {!loading && journal && isOpened && (
          <>
            <h3>Journal Entries</h3>
            <ul>
              {journal.entries.map((entry, idx) => (
                <li key={idx}>
                  <span>{entry.content}</span>
                  <small>{new Date(entry.createdAt).toLocaleString()}</small>
                </li>
              ))}
            </ul>

            <textarea
              value={newEntry}
              onChange={(e) => setNewEntry(e.target.value)}
              placeholder="Add new entry..."
            />
            <button onClick={addEntry} disabled={!newEntry.trim()}>
              Add Entry
            </button>
            <button onClick={saveEntries} disabled={loading}>
              {loading ? "Saving..." : "Save Journal"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EnvelopeModal;