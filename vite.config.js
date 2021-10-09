import {defineConfig} from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'node_modules/reveal.js/dist/reveal.css',
        'node_modules/reveal.js/dist/theme/moon.css',
        'ui/styles/hjs-solarized-light.css',
      ],
    },
  },
})
