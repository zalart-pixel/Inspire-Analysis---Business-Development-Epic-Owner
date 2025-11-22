<script setup>
definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Inspire Analysis - Global Project Management Excellence',
  meta: [
    {
      name: 'description',
      content: 'Professional business planning and analysis tools for global project management excellence.'
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-5xl sm:text-6xl font-semibold text-gray-900 tracking-tight leading-tight mb-6">
          Inspire Analysis
        </h1>
        <p class="text-2xl sm:text-3xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Global Project Management Excellence
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <NuxtLink to="/business-tools" class="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md">
            Explore Business Tools
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">Comprehensive Solutions</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">Professional tools designed to optimize your business operations and drive strategic growth.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature Card 1 -->
          <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Interactive Planning</h3>
            <p class="text-gray-600 leading-relaxed">Powerful planning tools to organize projects, allocate resources, and track progress efficiently.</p>
          </div>

          <!-- Feature Card 2 -->
          <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Advanced Analysis</h3>
            <p class="text-gray-600 leading-relaxed">In-depth analytics and insights to make data-driven decisions for your business strategy.</p>
          </div>

          <!-- Feature Card 3 -->
          <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Flexible Solutions</h3>
            <p class="text-gray-600 leading-relaxed">Customizable tools that adapt to your specific business needs and workflow requirements.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">Ready to Get Started?</h2>
        <p class="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Access our comprehensive suite of business tools to optimize your operations and drive growth.</p>
        <NuxtLink to="/business-tools" class="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md">
          Explore Tools
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Smooth transitions */
a {
  transition: all 0.3s ease;
}
</style>
