import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react(), eslint({
    include: [ 'src/**/*.ts', 'src/**/*.tsx' ], // Ensure it includes TypeScript files
    emitWarning: true,
    emitError: true
  }), ],
  server: {
    port: 3000, // or another port number
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@api': path.resolve(__dirname, './src/api')
    }
  }
});
