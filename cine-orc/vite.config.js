import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // Certifique-se de que o Vercel está olhando para a pasta correta
  },
});
