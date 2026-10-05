import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: './',
  build: {
    rolldownOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        demo: fileURLToPath(new URL('./demo.html', import.meta.url)),
      },
    },
  },
  plugins: [tailwindcss()],
  server: { host: '0.0.0.0', port: 8001, strictPort: true },
  preview: { host: '0.0.0.0', port: 8002, strictPort: true },
});


