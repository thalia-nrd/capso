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
      ...(data ? { body: JSON.stringify(data) } : {})
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
      throw new Error("Cannot reach server. Try again.");
    }
    throw err;
  }
}

export interface KeyItems {
  url: string | undefined;
  type: string;
  name?: string;
  description?: string;
  createdAt: string;
  uploadedAt: string;
}

export interface Key {
  id: number;
  frameId: number;
  items: KeyItems[];
  passcode?: string;
  createdAt: string;
  updatedAt: string;
}

// ⭐ KEYBOX FUNCTIONS (no frameId needed)
export const getKey = (): Promise<Key> =>
  request<Key>("/frame/key", "GET");

export const createKey = (passcode: string): Promise<Key> =>
  request<Key>("/frame/key", "POST", { passcode });

export const openKey = (frameId: number, passcode: string): Promise<Key> =>
  request<Key>("/frame/key/open", "POST", { frameId, passcode });

export const editKeyItems = (frameId: number, items: KeyItems[]): Promise<Key> =>
  request<Key>("/frame/key/items", "PUT", { frameId, items });