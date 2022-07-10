import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Dosis", "sans-serif"],
        title: ["Permanent Marker", "monospace"],
      },
      colors: {
        bgPrimary: "var(--color-bgPrimary)",
        textPrimary: "var(--color-textPrimary)",
      },
    },
  },
};
if (IS_BROWSER) setup(config);
