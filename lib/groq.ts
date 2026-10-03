// Server-only — import from Route Handlers / Server Actions, never from client components.
// Reads GROQ_API_KEY from .env.local (local dev). Never prefix with NEXT_PUBLIC_.
export function getGroqConfig() {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    throw new Error("Missing GROQ_API_KEY. Add it to .env.local (see .env.example).");
  }
  return {
    apiKey,
    model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
  };
}
