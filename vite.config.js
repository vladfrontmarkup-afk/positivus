import { fileURLToPath } from 'node:url';
import { extname, isAbsolute, relative, resolve, sep } from 'node:path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const imagesDirectory = fileURLToPath(new URL('./src/images/', import.meta.url));

function assetFileNames(asset) {
  const extension = extname(asset.names[0] ?? '').toLowerCase();

  if (extension === '.css') return 'assets/css/[name]-[hash][extname]';
  if (/^\.(woff2?|ttf|otf|eot)$/.test(extension)) return 'assets/fonts/[name]-[hash][extname]';

  const imagePath = asset.originalFileNames
    .map((file) => relative(imagesDirectory, resolve(file)))
    .find((file) => file && file !== '..' && !file.startsWith(`..${sep}`) && !isAbsolute(file));

  if (imagePath) return `assets/images/${imagePath.split(sep).join('/')}`;
  if (/^\.(svg|png|jpe?g|gif|webp|avif|ico|bmp)$/.test(extension)) return 'assets/images/[name][extname]';

  return 'assets/other/[name]-[hash][extname]';
}

export default defineConfig({
  base: './',
  build: {
    assetsInlineLimit: 0,
    rolldownOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
      },
      output: {
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames,
      },
    },
  },
  plugins: [tailwindcss()],
  server: { host: '0.0.0.0', port: 8001, strictPort: true },
  preview: { host: '0.0.0.0', port: 8002, strictPort: true },
});


