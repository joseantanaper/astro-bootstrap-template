const globalService = {
  storeTheme: (theme: string | undefined) => {
    console.log('globalService', 'storeTheme', theme)
    localStorage.setItem('theme', theme ?? 'system')
  },
  getStoredTheme: () => {
    return localStorage.getItem('theme') ?? 'system'
  },
  storeLocale: (locale: string | undefined) => {
    localStorage.setItem('locale', locale ?? 'es')
  },
  getStoredLocale: () => {
    return localStorage.getItem('locale') ?? 'es'
  },

  test: (label: string) => {
    console.log('globalService', 'test', label)
  },

  currentPathLocale: (url: string) => {
    return import.meta.env.DEV ? url.split('/')[1] : url.split('/')[2]
  },
  currentPath: (url: string) => {
    return import.meta.env.DEV ? url.split('/')[2] : url.split('/')[3]
    // return url
    //   .replace(import.meta.env.BASE_URL, '')
    //   .replace(/\/+$/, '')
    //   .split('/')[1]
  }
}

export { globalService }
