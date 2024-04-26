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
  getPathLocale: (url: string) => {
    return import.meta.env.DEV ? url.split('/')[1] : url.split('/')[2]
  }
}

export { globalService }
