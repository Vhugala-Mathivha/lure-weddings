const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

export async function fetchJSON<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json() as Promise<T>;
}

export const Api = {
  getServices: () => fetchJSON("/api/services/"),
  getGallery: () => fetchJSON("/api/gallery/"),
  postInspiration: (prompt: string) =>
    fetchJSON("/api/inspiration/", { method: "POST", body: JSON.stringify({ prompt }) }),
  postVows: (prompt: string) =>
    fetchJSON("/api/vows/", { method: "POST", body: JSON.stringify({ prompt }) }),
};