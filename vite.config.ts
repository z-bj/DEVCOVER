import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "DEVCOVER",
  plugins: [react(),svgr({ 
      svgrOptions: {
        // svgr options
      },
    })],
})
