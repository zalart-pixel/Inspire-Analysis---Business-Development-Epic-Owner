<script setup>
const isAdminLoggedIn = useState('isAdminLoggedIn', () => false)
const showAdminLogin = useState('showAdminLogin', () => false)
const adminPassword = ref('')
const adminError = ref('')

const loginAsAdmin = () => {
  if (adminPassword.value === 'inspire2025') {
    isAdminLoggedIn.value = true
    showAdminLogin.value = false
    adminPassword.value = ''
  } else {
    adminError.value = 'Incorrect password'
  }
}

const logoutAdmin = () => {
  isAdminLoggedIn.value = false
  adminPassword.value = ''
  adminError.value = ''
}
</script>

<template>
  <nav class="navbar">
    <Container>
      <div class="navbar-content">
        <NuxtLink href="/" class="logo-link">
          <span class="logo">Inspire Analysis</span>
        </NuxtLink>
        
        <div class="nav-menu">
          <NuxtLink href="/" class="nav-link">Home</NuxtLink>
          <NuxtLink href="/projects" class="nav-link">Projects</NuxtLink>
          <NuxtLink v-if="isAdminLoggedIn" href="/calculator" class="nav-link">Calculator</NuxtLink>
        </div>
        
        <div class="nav-auth">
          <div v-if="!isAdminLoggedIn">
            <button @click="showAdminLogin = true" class="admin-btn">Admin</button>
          </div>
          <div v-else>
            <span class="admin-label">Admin</span>
            <button @click="logoutAdmin" class="logout-btn">Logout</button>
          </div>
        </div>
      </div>
      
      <!-- Admin Login Modal -->
      <div v-if="showAdminLogin" class="admin-modal">
        <div class="admin-modal-content">
          <h3>Admin Login</h3>
          <input
            v-model="adminPassword"
            type="password"
            placeholder="Enter admin password"
            @keyup.enter="loginAsAdmin"
            class="admin-input"
          />
          <div v-if="adminError" class="error-text">{{ adminError }}</div>
          <div class="admin-modal-buttons">
            <button @click="loginAsAdmin" class="login-btn">Login</button>
            <button @click="showAdminLogin = false" class="cancel-btn">Cancel</button>
          </div>
        </div>
      </div>
    </Container>
  </nav>
</template>

<style scoped>
.navbar {
  border-bottom: 1px solid #f0f0f0;
  background: white;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-between: space-between;
  padding: 1rem 0;
  gap: 2rem;
}

.logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo {
  font-size: 1.125rem;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #000;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  flex: 1;
}

.nav-link {
  text-decoration: none;
  color: #666;
  font-size: 0.9375rem;
  font-weight: 400;
  letter-spacing: -0.016em;
  transition: color 0.2s;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #000;
}

.nav-auth {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.admin-btn,
.logout-btn,
.login-btn,
.cancel-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #d0d0d0;
  border-radius: 0.375rem;
  background: white;
  color: #000;
  font-size: 0.9375rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s;
}

.admin-btn:hover,
.logout-btn:hover {
  background: #f5f5f5;
  border-color: #999;
}

.login-btn {
  background: #000;
  color: white;
  border-color: #000;
}

.login-btn:hover {
  background: #333;
}

.admin-label {
  font-size: 0.9375rem;
  font-weight: 400;
  color: #666;
}

.admin-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.admin-modal-content {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
}

.admin-modal-content h3 {
  margin: 0 0 1rem 0;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.016em;
}

.admin-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d0d0d0;
  border-radius: 0.375rem;
  font-size: 0.9375rem;
  font-weight: 400;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
}

.admin-input:focus {
  outline: none;
  border-color: #000;
  box-shadow: 0 0 0 1px #000;
}

.error-text {
  color: #d32f2f;
  font-size: 0.8125rem;
  margin-bottom: 1rem;
}

.admin-modal-buttons {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.cancel-btn {
  flex: 1;
}

@media (max-width: 640px) {
  .nav-menu {
    display: none;
  }
  
  .navbar-content {
    gap: 1rem;
  }
}
</style>
