import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiUrl = env.VITE_API_URL || 'http://localhost:8000';

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        '/auth': {
          target: apiUrl,
          changeOrigin: true,
          secure: false,
        },
        '/chat': {
          target: apiUrl,
          changeOrigin: true,
          secure: false,
        },
        '/admin': {
          target: apiUrl,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})