const API_URL = process.env.REACT_APP_API_URL || "";

async function request<T>(endpoint: string, data: any): Promise<T> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });

    // If the request failed (400–500 range)
    if (!response.ok) {
      let errorMessage = "Request failed";
      try {
        const errorBody = await response.json();
        if (errorBody?.message) errorMessage = errorBody.message;
      } catch {
        // Response had no JSON (e.g. 500 HTML error)
      }
      throw new Error(errorMessage);
    }
    // Try to parse the JSON
    try {
      return await response.json();
    } catch {
      throw new Error("Invalid JSON response from server");
    }
  } catch (err: any) {
    // If fetch() itself failed (network issue, CORS, server down)
    if (err instanceof TypeError && err.message.includes("Failed to fetch")) {
      throw new Error("Cannot reach server. Please try again later.");
    }
    throw err;
  }
}

export const getMirrorFact = (frameId: string) => {
  return request<{ frameId: string; fact: string }>(
    `/frame/${frameId}/mirror/random-fact`,
    null
  );
};