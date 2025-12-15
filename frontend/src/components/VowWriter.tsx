import React, { useState } from "react";
import { Api } from "../lib/api";

export function VowWriter() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  const submit = async () => {
    if (!prompt.trim()) {
      setError("Please describe your story or what you want in the vows.");
      return;
    }
    setError("");
    setResult("");
    try {
      setLoading(true);
      const data = await Api.postVows(prompt.trim());
      setResult(data.result_text || "No result returned.");
    } catch (e: any) {
      console.error(e);
      setError(e?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="vows" className="bg-ivory py-20">
      <div className="lux-container max-w-3xl">
        <div className="smallcaps mb-2">Vow Atelier</div>
        <h3 className="text-4xl serif mb-4">Craft Your Vows</h3>
        <p className="text-[rgba(31,26,23,0.7)] mb-8">
          Capture your unique love story with articulate, heartfelt vows.
        </p>
        <div className="card p-6 flex flex-col gap-4">
          <textarea
            className="w-full border border-mist rounded-lg p-3 outline-none min-h-[140px]"
            placeholder="Describe your story, tone, and any details you want included..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <div className="flex justify-between items-center text-sm text-[rgba(31,26,23,0.7)]">
            {error && <span className="text-red-500">{error}</span>}
            {loading && <span>Generating...</span>}
          </div>
          <div className="flex justify-end">
            <button
              onClick={submit}
              disabled={loading}
              className="btn btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Generating..." : "Generate Vows"}
            </button>
          </div>
          {result && (
            <div className="bg-ivory border border-mist rounded-lg p-4 text-[rgba(31,26,23,0.8)] whitespace-pre-line">
              {result}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}