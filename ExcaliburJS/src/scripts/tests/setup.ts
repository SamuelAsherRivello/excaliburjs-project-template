// src/scripts/tests/setup.ts

import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Set up any global variables or configurations here
(global as any).testConfig = {
  apiUrl: 'http://localhost:3000/api',
};

// If you're using Excalibur, set up Excalibur-specific configurations
import { Engine } from 'excalibur';

// Mocking Excalibur's Engine to prevent canvas rendering during tests
vi.mock('excalibur', () => {
  const originalModule = vi.importActual('excalibur');
  return {
    ...originalModule,
    Engine: class MockEngine extends (originalModule as any).Engine {
      constructor(options: any) {
        super(options);
        this.start = vi.fn();
        this.stop = vi.fn();
      }
    },
  };
});

// You can add more global setup code here if needed

// If you need to run any code before or after all tests, you can use the following:
// Note: These hooks should be imported and used in your test files, not here.
/*
import { beforeAll, afterAll } from 'vitest';

beforeAll(() => {
  // This runs once before all tests
  console.log('Global setup before all tests');
});

afterAll(() => {
  // This runs once after all tests
  console.log('Global cleanup after all tests');
});
*/
