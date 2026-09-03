import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || (command === 'serve' ? '/' : './'),
  server: {
    port: 3000,
    open: false,
    watch: {
      ignored: ['**/*.pdf', '**/*.pptx', '**/*.docx'],
    },
  },
}));
