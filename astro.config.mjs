import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site:
    import.meta.env.PROD === false
      ? 'http://localhost:4321'
      : 'https://joseantanaper.github.io/astro-bootstrap-template/'
  // site: 'https://joseantanaper.github.io/',
  // site: 'http://glistening-dango-c88f0d.netlify.app',
  // base: '/astro-bootstrap-template'
  // base: '/'
})

