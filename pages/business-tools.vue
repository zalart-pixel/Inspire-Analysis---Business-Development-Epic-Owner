<template>
  <div class="min-h-screen bg-white">
    <!-- Page Header Section -->
    <section class="bg-gradient-to-b from-gray-50 to-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight">
            Business Tools
          </h1>
          <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Professional planning and analysis tools designed to optimize your business operations
          </p>
        </div>
      </div>
    </section>

    <!-- Tools Navigation Tabs -->
    <section class="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex space-x-8 overflow-x-auto scrollbar-hide">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-all duration-200',
              activeTab === tab.id 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            ]"
          >
            {{ tab.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Content Area -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Interactive Planner Tab -->
        <div v-if="activeTab === 'planner'" class="animate-fade-in">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <!-- Planner Header -->
            <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="text-2xl font-semibold text-gray-900">Interactive Business Planner</h2>
                  <p class="mt-1 text-sm text-gray-600">
                    Comprehensive planning tool for project management and business analysis
                  </p>
                </div>
                <div class="flex space-x-2">
                  <button
                    @click="toggleFullscreen"
                    class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Toggle Fullscreen"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                  <button
                    @click="refreshPlanner"
                    class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Refresh"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Iframe Container for Interactive Planner -->
            <div class="relative bg-gray-50" :class="isFullscreen ? 'fixed inset-0 z-50' : ''">
              <iframe
                ref="plannerFrame"
                :src="plannerUrl"
                class="w-full"
                :style="{ height: iframeHeight }"
                frameborder="0"
                allowfullscreen
                @load="onPlannerLoad"
              >
                <p>Your browser does not support iframes. Please upgrade to view the Interactive Planner.</p>
              </iframe>
              
              <!-- Loading Overlay -->
              <div v-if="isLoading" class="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center">
                <div class="text-center">
                  <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                  <p class="mt-4 text-gray-600">Loading Interactive Planner...</p>
                </div>
              </div>
              
              <!-- Exit Fullscreen Button -->
              <button
                v-if="isFullscreen"
                @click="toggleFullscreen"
                class="absolute top-4 right-4 p-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Instructions Section -->
          <div class="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <h3 class="text-lg font-semibold text-blue-900 mb-3">How to Use the Interactive Planner</h3>
            <div class="space-y-2 text-blue-800">
              <p class="flex items-start">
                <span class="inline-block w-6 h-6 rounded-full bg-blue-200 text-blue-900 text-sm font-semibold text-center mr-3 flex-shrink-0">1</span>
                <span>Enter your project details and requirements in the form fields provided</span>
              </p>
              <p class="flex items-start">
                <span class="inline-block w-6 h-6 rounded-full bg-blue-200 text-blue-900 text-sm font-semibold text-center mr-3 flex-shrink-0">2</span>
                <span>Configure timeline settings and resource allocation parameters</span>
              </p>
              <p class="flex items-start">
                <span class="inline-block w-6 h-6 rounded-full bg-blue-200 text-blue-900 text-sm font-semibold text-center mr-3 flex-shrink-0">3</span>
                <span>Generate comprehensive reports and visual analytics for your project</span>
              </p>
            </div>
          </div>
        </div>

        <!-- Analytics Tab -->
        <div v-if="activeTab === 'analytics'" class="animate-fade-in">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div class="text-center py-16">
              <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-gray-900 mb-3">Analytics Dashboard</h3>
              <p class="text-gray-600 mb-6 max-w-md mx-auto">
                Advanced analytics and reporting tools are coming soon. Stay tuned for powerful 
                data visualization and business intelligence features.
              </p>
              <button class="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors">
                Get Notified
              </button>
            </div>
          </div>
        </div>

        <!-- Resources Tab -->
        <div v-if="activeTab === 'resources'" class="animate-fade-in">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Resource Cards -->
            <div v-for="resource in resources" :key="resource.id" 
              class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ resource.title }}</h3>
              <p class="text-gray-600 mb-4 text-sm">{{ resource.description }}</p>
              <button class="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors flex items-center">
                Learn More
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Page metadata
useHead({
  title: 'Business Tools - Inspire Analysis',
  meta: [
    { 
      name: 'description', 
      content: 'Professional business planning and analysis tools from Inspire Analysis' 
    }
  ]
})

// Reactive state management
const activeTab = ref('planner')
const isLoading = ref(true)
const isFullscreen = ref(false)
const plannerFrame = ref(null)

// URL for the Interactive Planner - update this with your actual planner URL
const plannerUrl = ref('/interactive-planner.html') // This should be your actual planner file path

// Dynamic iframe height calculation
const iframeHeight = computed(() => {
  return isFullscreen.value ? '100vh' : '800px'
})

// Tab configuration
const tabs = ref([
  { id: 'planner', name: 'Interactive Planner' },
  { id: 'analytics', name: 'Analytics Dashboard' },
  { id: 'resources', name: 'Resources' }
])

// Resources data for the Resources tab
const resources = ref([
  {
    id: 1,
    title: 'Project Planning Guide',
    description: 'Comprehensive guide to effective project planning and management strategies.'
  },
  {
    id: 2,
    title: 'Risk Assessment Templates',
    description: 'Professional templates for identifying and mitigating project risks.'
  },
  {
    id: 3,
    title: 'ROI Calculator',
    description: 'Calculate return on investment for your business initiatives.'
  },
  {
    id: 4,
    title: 'Team Management Best Practices',
    description: 'Proven strategies for building and managing high-performing teams.'
  },
  {
    id: 5,
    title: 'Agile Methodology Toolkit',
    description: 'Essential tools and techniques for implementing agile methodologies.'
  },
  {
    id: 6,
    title: 'Business Analysis Framework',
    description: 'Structured approach to analyzing and optimizing business processes.'
  }
])

// Handle iframe load event
const onPlannerLoad = () => {
  isLoading.value = false
}

// Toggle fullscreen mode for the planner
const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value
  
  // Prevent body scroll when in fullscreen
  if (isFullscreen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

// Refresh the planner iframe
const refreshPlanner = () => {
  isLoading.value = true
  if (plannerFrame.value) {
    planner
