import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  js.configs.recommended,
  prettierConfig,

  {
    plugins: {
      prettier: prettierPlugin,
      "@next/next": nextPlugin,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
];
