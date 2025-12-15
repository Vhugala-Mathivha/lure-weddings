const API_BASE = import.meta.env.VITE_API_BASE_URL || ""; // e.g., "https://your-backend.vercel.app"

async function postJSON<T>(path: string, body: any): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed with ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export type VowsResponse = { result_text: string };
export type InspirationResponse = { image_url: string; description: string };

export const Api = {
  postVows: (prompt: string) =>
    postJSON<VowsResponse>("/api/vows", { prompt }),
  postInspiration: (prompt: string) =>
    postJSON<InspirationResponse>("/api/inspiration", { prompt }),
};