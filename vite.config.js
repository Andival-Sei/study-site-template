import { defineConfig } from 'vite';
import rawPlugin from 'vite-plugin-raw';

export default defineConfig({
  plugins: [
    rawPlugin({
      include: ['**/*.html']
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        introduction: 'src/pages/introduction.html',
      }
    }
  }
});