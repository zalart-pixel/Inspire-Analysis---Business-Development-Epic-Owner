import { ref } from 'vue'
<script setup>
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const route = useRoute()

const isActive = (path) => {
  return route.path === path
}
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white">
    <!-- Header Navigation -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo/Brand -->
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">IA</span>
              </div>
              <span class="hidden sm:inline text-lg font-semibold text-gray-900">Inspire Analysis</span>
            </NuxtLink>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-1">
            <NuxtLink 
              to="/" 
              :class="[
                'px-4 py-2 rounded-lg font-medium transition-colors',
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              ]"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/business-tools" 
              :class="[
                'px-4 py-2 rounded-lg font-medium transition-colors',
                isActive('/business-tools') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              ]"
            >
              Business Tools
            </NuxtLink>
          </nav>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <transition
          enter-active-class="transition-all duration-200"
          leave-active-class="transition-all duration-200"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <nav v-if="mobileMenuOpen" class="md:hidden pb-4 border-t border-gray-200 mt-4">
            <NuxtLink 
              to="/" 
              @click="closeMobileMenu"
              :class="[
                'block px-4 py-3 rounded-lg font-medium transition-colors',
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              ]"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/business-tools" 
              @click="closeMobileMenu"
              :class="[
                'block px-4 py-3 rounded-lg font-medium transition-colors',
                isActive('/business-tools') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              ]"
            >
              Business Tools
            </NuxtLink>
          </nav>
        </transition>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow pt-16">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="mt-auto bg-gray-50 border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 class="font-semibold text-gray-900 mb-4">About</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Inspire Analysis provides professional business planning and project management tools for organizations worldwide.</p>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/" class="text-gray-600 hover:text-gray-900 text-sm transition-colors">Home</NuxtLink></li>
              <li><NuxtLink to="/business-tools" class="text-gray-600 hover:text-gray-900 text-sm transition-colors">Business Tools</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-4">Contact</h3>
            <p class="text-gray-600 text-sm">Email: info@inspireanalysis.com</p>
            <p class="text-gray-600 text-sm mt-1">Global Project Management Excellence</p>
          </div>
        </div>
        <div class="border-t border-gray-200 pt-8 text-center">
          <p class="text-gray-600 text-sm">© 2025 Inspire Analysis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Smooth transitions */
a, button {
  transition: all 0.2s ease;
}

/* Ensure header stays fixed */
header {
  will-change: transform;
}
</style>
