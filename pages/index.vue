<script setup>
definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div class="font-semibold text-xl text-gray-900">Inspire Analysis</div>
        <div class="flex gap-8 items-center">
          <NuxtLink to="/" class="text-gray-700 hover:text-gray-900 transition">Home</NuxtLink>
          <NuxtLink to="/projects" class="text-gray-700 hover:text-gray-900 transition">Projects</NuxtLink>
          <NuxtLink to="/calculator" class="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition">Calculator</NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-24 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Business Tools<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
            Simplified
          </span>
        </h1>
        <p class="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          Powerful, intuitive tools designed for modern businesses. From space planning to project management, we've got you covered.
        </p>
        <div class="flex gap-4 justify-center">
          <NuxtLink to="/projects" class="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition font-medium">
            Get Started
          </NuxtLink>
          <a href="#features" class="px-8 py-3 border border-gray-300 text-gray-900 rounded-full hover:border-gray-400 transition font-medium">
            Learn More
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-24 bg-gray-50 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold text-gray-900 mb-4">Features</h2>
          <p class="text-xl text-gray-600">Everything you need to succeed</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-8 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition">
            <div class="w-12 h-12 bg-gray-900 rounded-full mb-4"></div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Office Calculator</h3>
            <p class="text-gray-600">Calculate and plan your office space with precision. Save your configurations and revisit them anytime.</p>
          </div>
          <div class="p-8 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition">
            <div class="w-12 h-12 bg-gray-900 rounded-full mb-4"></div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Project Management</h3>
            <p class="text-gray-600">Manage multiple projects with ease. Admin access to all projects, or view only your assigned ones.</p>
          </div>
          <div class="p-8 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition">
            <div class="w-12 h-12 bg-gray-900 rounded-full mb-4"></div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Secure Access</h3>
            <p class="text-gray-600">Password-protected projects ensure your data stays secure and accessible only to authorized users.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 px-6">
      <div class="max-w-4xl mx-auto bg-gray-900 text-white rounded-3xl p-12 text-center">
        <h2 class="text-5xl font-bold mb-4">Ready to get started?</h2>
        <p class="text-xl text-gray-300 mb-8">Access your projects and tools with secure login</p>
        <NuxtLink to="/projects" class="inline-block px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition font-semibold">
          Access Projects
        </NuxtLink>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-gray-200 py-8 px-6">
      <div class="max-w-6xl mx-auto text-center text-gray-600">
        <p>&copy; 2024 Inspire Analysis. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
