import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' → relative asset URLs so the built site works from any path
// (GitHub Pages project subpath, a subfolder, or opened directly).
export default defineConfig({
  base: './',
  plugins: [react()],
});
