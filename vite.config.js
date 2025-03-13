import { defineConfig } from "vite";
import fs from "fs";
import path from "path";

// Get all HTML files in the root folder dynamically
const htmlFiles = fs.readdirSync("./").filter((file) => file.endsWith(".html"));

const input = htmlFiles.reduce((acc, file) => {
  acc[file.replace(".html", "")] = `./${file}`;
  return acc;
}, {});

export default defineConfig({
  build: {
    rollupOptions: {
      input, // Dynamically include all HTML files
    },
  },
});
