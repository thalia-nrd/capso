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
    // Only attach body for methods that allow it
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

export interface Polaroid {
  id: number;
  imageUrl: string;
  frameId: string;
  createdAt: string;
  updatedAt: string;
}

export const getPolaroid = (frameId: string): Promise<Polaroid[]> => {
  return request<Polaroid[]>(`/frame/polaroid`, "GET");
}

export const createPolaroid = (frameId: string, imageUrl: string): Promise<Polaroid> => {
  return request<Polaroid>(`/frame/polaroid`, "POST", { imageUrl });
}

export const updatePolaroid = (frameId: string, polaroidId: string, imageUrl: string): Promise<Polaroid> => {
  return request<Polaroid>(`/frame/polaroid/${polaroidId}`, "PUT", { imageUrl });
}