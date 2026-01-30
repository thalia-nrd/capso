const API_URL = process.env.REACT_APP_API_URL || "";

async function request<T>(
  endpoint: string,
  method: string = "GET",
  data?: any
): Promise<T> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method,
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      ...(data ? { body: JSON.stringify(data) } : {}),
    });

    if (!response.ok) {
      let error = "Request failed";
      try {
        const body = await response.json();
        if (body?.error) error = body.error;
      } catch {}
      throw new Error(error);
    }

    const text = await response.text();
    return text ? JSON.parse(text) : ({} as T);
  } catch (err: any) {
    if (err instanceof TypeError && err.message.includes("Failed to fetch")) {
      throw new Error("Cannot reach server.");
    }
    throw err;
  }
}

export interface JournalEntry {
  content: string;
  createdAt: string;
}

export interface Journal {
  id: number;
  frameId: string;
  entries: JournalEntry[];
  passcode?: string;
}

export const getJournal = (frameId: string): Promise<Journal> =>
  request<Journal>("/frame/journal", "GET");

export const createJournal = (
  frameId: string,
  passcode: string
): Promise<Journal> =>
  request<Journal>("/frame/journal", "POST", { passcode });

export const openJournal = (
  frameId: string,
  passcode: string
): Promise<Journal> =>
  request<Journal>("/frame/journal/open", "POST", { frameId, passcode });

export const editJournalEntries = (
  frameId: string,
  entries: JournalEntry[]
): Promise<Journal> =>
  request<Journal>("/frame/journal/entries", "PUT", {
    frameId,
    entries,
  });