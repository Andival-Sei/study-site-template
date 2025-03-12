import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        introduction: resolve(__dirname, 'src/pages/introduction.html'),
      }
    }
  },
  assetsInclude: ['**/*.html'],
  optimizeDeps: {
    esbuildOptions: {
      logOverride: { 'commonjs-variables': 'silent' }
    }
  }
});