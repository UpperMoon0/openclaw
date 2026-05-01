import { defineSingleProviderPluginEntry } from "openclaw/plugin-sdk/provider-entry";
import { buildGeminiWrapperProvider } from "./provider-catalog.js";

const PROVIDER_ID = "gemini-wrapper";

export default defineSingleProviderPluginEntry({
  id: PROVIDER_ID,
  name: "Gemini Wrapper Provider",
  description: "Local Gemini-Wrapper provider plugin",
  provider: {
    label: "Gemini Wrapper",
    docsPath: "/providers/gemini-wrapper",
    auth: [
      {
        methodId: "none",
        label: "Local Access",
        hint: "No authentication required for local wrapper",
        optionKey: "geminiWrapperNoAuth",
        applyConfig: () => {},
      },
    ],
    catalog: {
      buildProvider: buildGeminiWrapperProvider,
    },
    capabilities: {
      geminiThoughtSignatureSanitization: true,
      geminiThoughtSignatureModelHints: ["gemini"],
    },
  },
});
