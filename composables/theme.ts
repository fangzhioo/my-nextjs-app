export type Theme = 'light' | 'dark'

export const useDefaultTheme = (fallback: Theme = 'light') => {
  const theme = ref<Theme>(fallback)
  if (process.client) {
    const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)')
    theme.value = isDarkTheme.matches ? 'dark' : 'light'
  }
  return theme
}

export const useTheme = () => useState<Theme>('theme', () => useDefaultTheme().value)

export const useThemes = () => {
  const theme = useTheme()
  const themes = ref<Theme[]>(['dark', 'light'])
  if (!themes.value.includes(theme.value)) {
    themes.value.unshift(theme.value)
  }
  return themes
}
