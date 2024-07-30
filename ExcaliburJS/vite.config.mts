/// <reference types="vitest" />
import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import glob from 'glob';
import { UserConfig as VitestUserConfig } from 'vitest/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface UserConfig extends VitestUserConfig {
  test: {
    globals: boolean;
    environment: string;
    setupFiles: string[];
    include: string[];
    exclude: string[];
    alias: Record<string, string>;
  };
}

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@client': path.resolve(__dirname, './src/scripts/client'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000, // in kBs
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['excalibur'],
          'game-core': glob.sync('./src/scripts/client/core/**/*.ts'),
          'mini-arcade': glob.sync('./src/scripts/client/projects/miniArcade/**/*.ts'),
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/scripts/tests/setup.ts'],
    include: ['src/scripts/tests/**/*Test.ts', 'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
    alias: {
      '@client': path.resolve(__dirname, './src/scripts/client'),
    },
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        './*.{js,ts,mts}', // Exclude files directly in the project root
        '**/*.d.ts', // Exclude all files ending with "d.ts"
        'node_modules/**',
        'dist/**',
        'coverage/**',
        'src/assets/**',
      ],
    },
  },
} as UserConfig);
