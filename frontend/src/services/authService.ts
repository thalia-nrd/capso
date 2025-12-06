import { loginSchemaType } from "../app/pages/auth/LoginPage";
import { registerSchemaType } from "../app/pages/auth/RegisterPage";

const API_URL = process.env.REACT_APP_API_URL || "";

async function request<T>(endpoint: string, data: any): Promise<T> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
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

    // Re-throw custom error
    throw err;
  }
}

export const login = (loginData: loginSchemaType) => {
  return request<{ message: string; userId: string; cabinet: { id: string } }>(
    "/auth/login",
    loginData
  );
};

export const register = (registerData: registerSchemaType) => {
  return request<{ message: string; userId: string; cabinet: any }>(
    "/auth/signup",
    registerData
  );
};