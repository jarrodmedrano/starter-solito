import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    include: ['**/*.test.ts'],
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, 'test/setup/setup.ts')],
    reporters: 'dot',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
  plugins: [react()],
});
