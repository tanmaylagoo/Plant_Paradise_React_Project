import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project sites use /REPOSITORY-NAME/.
  // Change this to your repository name, including the slashes.
  base: "/paradise-nursery/"
});