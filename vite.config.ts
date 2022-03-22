import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  // define: {
  //   // 'process.env': {},
  //   'process.env': process.env,
  //   global: {},
  //   // Buffer: {},
  // },
  base: '/nft-demo/',
  build: {
    outDir: 'docs', // use docs as build folder name for github pages
  },
})
