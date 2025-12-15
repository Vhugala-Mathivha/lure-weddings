import React, { useState } from "react";
import { Api } from "../lib/api";

type InspirationResult = { image_url: string; description: string };

export function Inspiration() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<InspirationResult | null>(null);

  const onGenerate = async () => {
    try {
      setLoading(true);
      const data = (await Api.postInspiration(prompt)) as InspirationResult;
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="inspiration" className="bg-white py-20">
      <div className="lux-container text-center">
        <h3 className="text-4xl serif mb-3">Visual Inspiration</h3>
        <p className="text-[rgba(31,26,23,0.7)] mb-10">
          Describe your dream aesthetic, and let us visualize it.
        </p>

        <div className="flex justify-center">
          <div className="flex w-full max-w-4xl items-center gap-2 rounded-full border border-[#e7e2df] bg-[#fbfbfa] px-4 py-2 shadow-[0_8px_22px_rgba(0,0,0,0.06)]">
            <input
              className="flex-1 bg-transparent px-3 py-2 text-[15px] text-[#8d8681] placeholder:text-[#c1b8b3] focus:outline-none"
              placeholder="e.g. A 5-tier art deco wedding cake with gold leaf detailing..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              onClick={onGenerate}
              disabled={loading}
              className="shrink-0 px-6 py-2 rounded-full bg-[#c9c0ba] text-white text-[12px] font-semibold uppercase tracking-[0.12em] border border-white/70 shadow-[0_6px_14px_rgba(0,0,0,0.08)] hover:bg-[#c1b6af] active:scale-[0.99] transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "..." : "Generate"}
            </button>
          </div>
        </div>

        {result && (
          <div className="mt-12 flex flex-col items-center gap-4">
            <img
              src={result.image_url}
              alt={result.description}
              className="w-full max-w-3xl rounded-lg shadow-soft object-cover"
            />
            <p className="text-[rgba(31,26,23,0.75)]">{result.description}</p>
          </div>
        )}
      </div>
    </section>
  );
}