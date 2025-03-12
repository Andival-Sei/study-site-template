import { defineConfig } from 'vite';
import { resolve } from 'path';
import includeHtml from 'vite-include-html-plugin';

export default defineConfig({
  plugins: [
    includeHtml()
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        introduction: resolve(__dirname, 'src/pages/introduction.html')
      },
      output: {
        // Эта настройка сохранит структуру директорий для HTML файлов
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
        // Важная настройка для сохранения структуры директорий HTML
        preserveModulesRoot: 'src'
      }
    }
  }
});