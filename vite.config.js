import { defineConfig } from 'vite';
import { resolve } from 'path';
import includeHtml from 'vite-include-html-plugin';

export default defineConfig({
  plugins: [
    includeHtml()
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        introduction: resolve(__dirname, 'src/pages/introduction.html'),
      }
    }
  }
});