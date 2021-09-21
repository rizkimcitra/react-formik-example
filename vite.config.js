import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  },
  plugins: [reactRefresh()],
  esbuild: {
    // this will make app not import react on every jsx file
    jsxInject: `import React from 'react'`,
  },
})
