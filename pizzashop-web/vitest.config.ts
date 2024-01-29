import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom',
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
})
