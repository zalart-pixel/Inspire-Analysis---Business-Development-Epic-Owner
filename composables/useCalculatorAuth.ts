export const useCalculatorAuth = () => {
  const isAuthenticated = ref(false)
  
  const checkAuth = () => {
    if (process.client) {
      const stored = sessionStorage.getItem('calc_auth')
      isAuthenticated.value = stored === 'true'
    }
  }
  
  const authenticate = (password: string) => {
    if (password === 'inspire2025') {
      sessionStorage.setItem('calc_auth', 'true')
      isAuthenticated.value = true
      return true
    }
    return false
  }
  
  const logout = () => {
    sessionStorage.removeItem('calc_auth')
    isAuthenticated.value = false
  }
  
  onMounted(() => {
    checkAuth()
  })
  
  return {
    isAuthenticated,
    authenticate,
    logout,
    checkAuth
  }
}
