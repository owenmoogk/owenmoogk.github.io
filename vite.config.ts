import react from '@vitejs/plugin-react';
import fs from 'fs/promises'; // Use fs.promises for async file operations
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { viteStaticCopy } from 'vite-plugin-static-copy';

import type { Project } from '@api/projects';

export const ProjectJsonPath = path.resolve(
  __dirname,
  'src',
  'api',
  'projects.json'
);

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    eslint({
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      emitWarning: true,
      emitError: false, // error doesn't block compilation
      failOnWarning: false,
      failOnError: false, // error doesn't block compilation
    }),
    {
      name: 'generate-project-metadata',
      buildStart: async () => {
        try {
          const dataDir = path.resolve(
            __dirname,
            'public',
            'assets',
            'projects'
          ); // Path to your data files
          const projects: Project[] = [];
          const projectFolders = await fs.readdir(dataDir); // Read the "projects" directory

          for (const projectSlug of projectFolders) {
            const projectPath = path.join(dataDir, projectSlug);
            const stats = await fs.stat(projectPath); // Check if it's a directory

            if (stats.isDirectory()) {
              // Process only directories (project folders)
              const projectFile = path.join(projectPath, `${projectSlug}.json`); // Path to JSON file
              try {
                const fileContents = await fs.readFile(projectFile, 'utf8');
                projects.push({
                  ...(JSON.parse(fileContents) as Project),
                  name: projectSlug,
                });
              } catch (fileError) {
                console.error(
                  `Error reading or parsing ${projectFile}:`,
                  fileError
                );
                // Handle the error appropriately, e.g., skip the project or throw an error
              }
            }
          }
          // write to src/api/projects.json
          await fs.writeFile(
            ProjectJsonPath,
            JSON.stringify(
              projects.sort((a, b) => {
                // return (projectUrls.indexOf(a.name) - projectUrls.indexOf(b.name))
                return new Date(b.date).valueOf() - new Date(a.date).valueOf();
              }),
              null,
              2
            )
          );
          // copy the file to public/assets
          const publicAssetsPath = path.resolve(
            __dirname,
            'public',
            'assets',
            'projects.json'
          );
          await fs.copyFile(ProjectJsonPath, publicAssetsPath);
        } catch (error) {
          console.error('Error generating project metadata:', error);
          throw error; // Stop the build
        }
      },
    },
    viteStaticCopy({
      targets: [
        { src: 'src/components/homepage/splashes.json', dest: 'assets' },
        { src: 'src/components/work/work.json', dest: 'assets' },
        { src: 'src/components/assets/publicAssets.json', dest: 'assets' },
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
