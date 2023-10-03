import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/lib/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  injectStyle:true,
  format:['esm'],
  external:['react','react-dom'],
  outDir:'dist',
})
