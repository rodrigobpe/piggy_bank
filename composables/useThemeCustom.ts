export const useThemeCustom = () => {
    const useThemeStore = useTheme()

    const theme = computed(() => useThemeStore.global.name.value)

    const bgContrast = computed(() => useThemeStore.global.current.value.colors['bg-contrast'])

    const changeTheme = () => {
        return useThemeStore.global.name.value = useThemeStore.global.current.value.dark ? 'light' : 'dark'        
    }

    return {
        theme, changeTheme, bgContrast
    }
}