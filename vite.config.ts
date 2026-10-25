import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/CV/',
  build: {
    rollupOptions: {
      input: {
        cv: 'index.html',
        cats: 'cat-facts/index.html',
        lyrics: 'lyrics-finder/index.html',
      },
    },
  },
});
