import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body as { prompt?: string };

  if (!prompt || !prompt.trim()) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  // TODO: Replace with your AI/service call
  const result_text = `Here are your vows based on: "${prompt}"\n\nI promise to cherish you...`;

  return res.status(200).json({ result_text });
}