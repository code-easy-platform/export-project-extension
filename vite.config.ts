import { defineConfig } from 'vite';


export default defineConfig({
  build: {
    lib: {
      formats: ['es'],
      entry: './src/extension.ts',
      name: 'export-project-extension',
      fileName: () => `index.js`,
    },
    rollupOptions: {
      external: [],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    cors: {
      origin: '*',
    },
  }
})
