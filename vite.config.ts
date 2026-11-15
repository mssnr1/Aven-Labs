import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // Served from a sub-path on GitHub Pages (/Aven-Labs/); set by the deploy workflow.
  base: process.env.BASE_PATH ?? '/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg', 'icon-180.png'],
      manifest: {
        name: 'Aven Labs',
        short_name: 'Aven Labs',
        description: 'Atmen, Gesicht, Dehnen: die Apps von Aven Labs an einem Ort.',
        theme_color: '#0b0f16',
        background_color: '#0b0f16',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '.',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: { globPatterns: ['**/*.{js,css,html,svg,png,webp,woff2,webmanifest}'] },
    }),
  ],
  test: { include: ['src/**/*.test.ts'] },
})
