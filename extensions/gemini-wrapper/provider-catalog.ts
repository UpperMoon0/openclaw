import type { ModelProviderConfig } from "openclaw/plugin-sdk/provider-models";

export const GEMINI_WRAPPER_BASE_URL = "http://localhost:11435/v1";

export async function buildGeminiWrapperProvider(): Promise<ModelProviderConfig> {
  // We can optionally fetch from http://localhost:11435/v1/models here
  // For simplicity and to ensure it works even if backend is slow to start, 
  // we'll provide the known models.
  return {
    baseUrl: GEMINI_WRAPPER_BASE_URL,
    api: "openai-completions",
    models: [
      {
        id: "gemini-2.5-flash",
        name: "Gemini 2.5 Flash (Local)",
        input: ["text", "image"],
        contextWindow: 1048576,
        maxTokens: 8192,
      },
      {
        id: "gemini-3-flash-preview",
        name: "Gemini 3 Flash Preview (Local)",
        input: ["text", "image"],
        contextWindow: 1048576,
        maxTokens: 8192,
      },
    ],
  };
}
