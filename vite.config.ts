import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    eslint({
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      emitWarning: true,
      emitError: false, // error doesn't block compilation
      failOnWarning: false,
      failOnError: false, // error doesn't block compilation
    }),
    viteStaticCopy({
      targets: [
        { src: 'src/components/homepage/splashes.json', dest: 'assets' },
        { src: 'src/components/work/work.json', dest: 'assets' },
        { src: 'src/components/assets/publicAssets.json', dest: 'assets' },
        {
          src: 'src/components/projects/projectDirectory.json',
          dest: 'assets',
        },
      ],
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@api': path.resolve(__dirname, './src/api'),
      '@global': path.resolve(__dirname, './src/global'),
    },
  },
});
