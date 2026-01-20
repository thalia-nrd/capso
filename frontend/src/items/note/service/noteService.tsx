const API_URL = process.env.REACT_APP_API_URL || "";

async function request<T>(
  endpoint: string,
  method: string = "GET",
  data?: any
): Promise<T> {
  const options: RequestInit = {
    method,
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  };

  if (data && method !== "GET" && method !== "DELETE") {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);

    if (!response.ok) {
      let errorMessage = "Request failed";
      try {
        const errorBody = await response.json();
        if (errorBody?.message) errorMessage = errorBody.message;
      } catch {}
      throw new Error(errorMessage);
    }

    // If response is 204 No Content, return undefined
    if (response.status === 204 || response.status === 205) {
      return undefined as unknown as T;
    }

    // If there is no body, skip parsing
    const text = await response.text();
    if (!text) return undefined as unknown as T;

    return JSON.parse(text) as T;
  } catch (err: any) {
    if (err instanceof TypeError && err.message.includes("Failed to fetch")) {
      throw new Error("Cannot reach server. Please try again later.");
    }
    throw err;
  }
}


export interface Note {
  id: number;
  content: string;
  frameId: string;
  position?: number | null;
  createdAt: string;
  updatedAt: string;
}

export const getNotes = (frameId: string): Promise<Note[]> => {
  return request<Note[]>(`/frame/notes`, "GET");
};

export const createNote = (frameId: string, content: string): Promise<Note> => {
  return request<Note>(`/frame/notes`, "POST", { content });
};

export const updateNote = (
  frameId: string,
  noteId: string,
  content: string
): Promise<Note> =>
  request<Note>(`/frame/notes/${noteId}`, "PUT", { content });

export const deleteNote = (frameId: string, noteId: string): Promise<void> =>
  request<void>(`/frame/notes/${noteId}`, "DELETE");
