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

    if (!response.ok) {
      let errorMessage = "Request failed";

      try {
        const errorBody = await response.json();
        if (errorBody?.message) errorMessage = errorBody.message;
      } catch {
    }

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

export const login = (loginData: loginSchemaType) => {
  return request<{ message: string; userId: string; frame: { id: string } }>(
    "/auth/login",
    loginData
  );
};

export const register = (registerData: registerSchemaType) => {
  return request<{ message: string; userId: string; frame: any }>(
    "/auth/signup",
    registerData
  );
};