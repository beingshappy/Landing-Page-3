import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/maac/',   // 👈 yaha apne repo ka naam dalna
})
