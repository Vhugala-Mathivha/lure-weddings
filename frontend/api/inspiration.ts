import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body as { prompt?: string };

  if (!prompt || !prompt.trim()) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  // TODO: Replace with your image generation/service call
  const image_url = "https://images.unsplash.com/photo-1511909525232-61113c912358?auto=format&fit=crop&w=1200&q=80";
  const description = `Mood board generated for: "${prompt}"`;

  return res.status(200).json({ image_url, description });
}