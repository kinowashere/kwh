import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
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
} as Options;
  