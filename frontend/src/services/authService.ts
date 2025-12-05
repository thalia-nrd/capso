import { loginSchemaType } from "../app/pages/auth/LoginPage";
import { registerSchemaType } from "../app/pages/auth/RegisterPage";

const API_URL = process.env.REACT_APP_API_URL || "";

async function request<T>(endpoint: string, data: any): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || "Request failed");
  }

  return response.json();
}

// Login helper
export const login = (loginData: loginSchemaType) => {
  return request<{ token: string; user: any }>("/api/auth/login", loginData);
};

// Register helper
export const register = (registerData: registerSchemaType) => {
  return request<{ message: string }>("/api/auth/register", registerData);
};