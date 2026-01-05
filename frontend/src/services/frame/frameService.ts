const API_URL = process.env.REACT_APP_API_URL || "";

async function request<T>(
  endpoint: string,
  method: string = "GET",
  data?: any
): Promise<T> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method,
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...(data ? { body: JSON.stringify(data) } : {}),
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
}

export type FullFrame = {
  id: number;
  title: string;
  chest?: any;
  journal?: any;
  polaroid: any[];
  media: any[];
  checklist: any[];
  notes: any[];
};

export const getUserFrame = () => {
  return request<FullFrame>("/frame");
};