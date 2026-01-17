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
      let errorMessage = "Request failed";
      try {
        const errorBody = await response.json();
        if (errorBody?.message) errorMessage = errorBody.message;
      } catch {}
      throw new Error(errorMessage);
    }

    const text = await response.text();
    return text ? JSON.parse(text) : ({} as T);
  } catch (err: any) {
    if (err instanceof TypeError && err.message.includes("Failed to fetch")) {
      throw new Error("Cannot reach server. Please try again later.");
    }
    throw err;
  }
}

export async function getClockTime(): Promise<{
  hours: number;
  minutes: number;
  seconds: number;
  iso: string;
}> {
  return request<{
    hours: number;
    minutes: number;
    seconds: number;
    iso: string;
  }>(`/frame/clock`, "GET");
}