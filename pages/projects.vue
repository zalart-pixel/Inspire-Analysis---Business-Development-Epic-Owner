<script setup>
import { ref, computed } from 'vue'

const isLoggedIn = ref(false)
const userRole = ref(null) // 'admin' or 'user'
const loginUsername = ref('')
const loginPassword = ref('')
const loginError = ref('')

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
}

const projects = ref([
  {
    id: 1,
    name: 'Office Space Calculator',
    description: 'Calculate and plan your office space with precision',
    url: '/calculator',
    icon: '📐'
  }
])

const visibleProjects = computed(() => {
  if (userRole.value === 'admin') {
    return projects.value
  }
  // Regular users see only their assigned projects
  return projects.value.slice(0, 1) // For now, show the first project
})

const handleLogin = () => {
  loginError.value = ''
  
  if (loginUsername.value === ADMIN_CREDENTIALS.username && 
      loginPassword.value === ADMIN_CREDENTIALS.password) {
    isLoggedIn.value = true
    userRole.value = 'admin'
    loginUsername.value = ''
    loginPassword.value = ''
  } else if (loginUsername.value.trim() && loginPassword.value.trim()) {
    // Allow user login with any non-empty credentials
    isLoggedIn.value = true
    userRole.value = 'user'
    loginUsername.value = ''
    loginPassword.value = ''
  } else {
    loginError.value = 'Please enter valid credentials'
  }
}

const handleLogout = () => {
  isLoggedIn.value = false
  userRole.value = null
  loginUsername.value = ''
  loginPassword.value = ''
}

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Main Content -->
    <div class="pt-28 pb-12 px-6">
      <div class="max-w-4xl mx-auto">
        <!-- Login Section -->
        <div v-if="!isLoggedIn" class="mb-12">
          <div class="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 class="text-3xl font-normal text-gray-900 mb-6">Project Access</h2>
            <p class="text-gray-600 mb-6 font-normal">Login to access your projects</p>
            
            <form @submit.prevent="handleLogin" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-900 mb-2">Username</label>
                <input 
                  v-model="loginUsername"
                  type="text"
                  placeholder="Enter username"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-900 mb-2">Password</label>
                <input 
                  v-model="loginPassword"
                  type="password"
                  placeholder="Enter password"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                />
              </div>
              
              <div v-if="loginError" class="text-red-600 text-sm">{{ loginError }}</div>
              
              <div class="text-sm text-gray-600 bg-blue-50 p-3 rounded font-normal">
                <p class="font-medium">Demo Credentials:</p>
                <p>Admin: username = <code>admin</code>, password = <code>admin123</code></p>
                <p>User: use any username and password</p>
              </div>
              
              <button 
                type="submit"
                class="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium"
              >
                Login
              </button>
            </form>
          </div>
        </div>

        <!-- Projects Section -->
        <div v-if="isLoggedIn">
          <div class="mb-8">
            <div class="flex justify-between items-center">
              <div>
                <h2 class="text-3xl font-normal text-gray-900 mb-2">Your Projects</h2>
                <p class="text-gray-600 font-normal">Welcome! You are logged in as {{ userRole === 'admin' ? 'Administrator' : 'User' }}</p>
              </div>
              <button 
                @click="handleLogout"
                class="px-6 py-2 border border-gray-300 text-gray-900 rounded-lg hover:border-gray-400 transition"
              >
                Logout
              </button>
            </div>
          </div>

          <!-- Projects Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="project in visibleProjects"
              :key="project.id"
              class="bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition p-6 group cursor-pointer"
            >
              <div class="text-4xl mb-4">{{ project.icon }}</div>
              <h3 class="text-xl font-normal text-gray-900 mb-2">{{ project.name }}</h3>
              <p class="text-gray-600 mb-6 font-normal">{{ project.description }}</p>
              <NuxtLink 
                :to="project.url"
                class="inline-block px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium"
              >
                Open Project →
              </NuxtLink>
            </div>
          </div>

          <!-- No Projects Message -->
          <div v-if="visibleProjects.length === 0" class="text-center py-12">
            <p class="text-gray-600 text-lg font-normal">No projects available for you at this time.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
