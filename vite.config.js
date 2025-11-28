import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base_path = process.env.VITE_BASE_PATH || '/';

export default defineConfig({
  base: base_path,
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  }
});