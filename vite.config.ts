import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],

  resolve: {
    tsconfigPaths: true,

    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve('./src/assets'),
      '@shared/': path.resolve('./src/shared'),
      '@layouts/': path.resolve('./src/layouts'),
      '@pages/': path.resolve('./src/pages'),
    },
  },
});
