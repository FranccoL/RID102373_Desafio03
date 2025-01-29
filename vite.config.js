import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,  // Permite usar 'test' e 'expect' diretamente
    environment: 'jsdom',  // Simula um ambiente de navegador
    setupFiles: './tests/setupTests.js',  // Indica o caminho correto para o setupTests.js
  },
});
