<template>
  <div class="login-page">
    <div class="login-container">
      <h1>Office Space Calculator</h1>
      <p>Password-protected access</p>
      <form @submit.prevent="handleLogin">
        <input v-model="password" type="password" placeholder="Enter password" autocomplete="off" />
        <button type="submit" :disabled="loading">{{ loading ? 'Checking...' : 'Access Calculator' }}</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const password = ref('')
const error = ref('')
const loading = ref(false)
const { authenticate } = useCalculatorAuth()

const handleLogin = async () => {
  loading.value = true
  error.value = ''
  if (authenticate(password.value)) {
    navigateTo('/calculator/tool')
  } else {
    error.value = 'Incorrect password. Try: inspire2025'
  }
  loading.value = false
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.login-container {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  max-width: 400px;
  width: 90%;
}

h1 {
  font-size: 28px;
  margin-bottom: 10px;
  color: #1f2937;
  font-weight: 600;
}

p {
  color: #6b7280;
  margin-bottom: 30px;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 15px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 12px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}

button:hover:not(:disabled) {
  background: #1d4ed8;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error {
  color: #ef4444;
  margin-top: 15px;
  font-size: 14px;
}
</style>
