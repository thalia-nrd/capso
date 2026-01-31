const API_URL = process.env.REACT_APP_API_URL || "";

async function request<T>(
  endpoint: string,
  data?: any,
  method: string = "GET"
): Promise<T> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method,
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      ...(method !== "GET" && data ? { body: JSON.stringify(data) } : {}),
    });

    if (!response.ok) {
      let errorMessage = "Request failed";
      try {
        const errorBody = await response.json();
        if (errorBody?.message) errorMessage = errorBody.message;
      } catch {}
      throw new Error(errorMessage);
    }

    try {
      return await response.json();
    } catch {
      throw new Error("Invalid JSON response from server");
    }
  } catch (err: any) {
    if (err instanceof TypeError && err.message.includes("Failed to fetch")) {
      throw new Error("Cannot reach server. Please try again later.");
    }
    throw err;
  }
}

export const getRandomDuck = async (frameId: string) => {
  const res = await request<{
    frameId: any;
    duck: {
      url: string;
    };
  }>(`/frame/duck/quack`);

  return {
    frameId: res.frameId,
    duckUrl: res.duck.url,
  };
};