import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  build: {
    // Default _astro is not working on github pages.
    assets: 'astro/'
  },
  site: 'https://joseantanaper.github.io/',
  base: '/astro-bootstrap-template'
})

