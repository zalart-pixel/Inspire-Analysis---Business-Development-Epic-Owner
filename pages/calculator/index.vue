<script setup lang="ts">
import { definePageMeta } from '#app'
import CalculatorTool from './tool.vue'

definePageMeta({
  layout: 'default',
})

const isAdminLoggedIn = useState('isAdminLoggedIn')
const router = useRouter()

onMounted(() => {
  if (!isAdminLoggedIn.value) {
    router.push('/')
  }
})

watch(isAdminLoggedIn, (newVal) => {
  if (!newVal) {
    router.push('/')
  }
})
</script>

<template>
  <div class="calculator-page">
    <div v-if="isAdminLoggedIn" class="calculator-wrapper">
      <div class="calculator-header">
        <h1>Office Space Calculator</h1>
        <p>Modify room sizes and create your space layout</p>
      </div>
      <div class="calculator-content">
        <CalculatorTool />
      </div>
    </div>
    <div v-else class="not-authorized">
      <p>You must be logged in as admin to access the calculator.</p>
    </div>
  </div>
</template>

<style scoped>
.calculator-page {
  min-height: 100vh;
  padding: 2rem;
  background: #f9fafb;
}

.calculator-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.calculator-header {
  margin-bottom: 0.5rem;
}

.calculator-header h1 {
  font-size: 2.25rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.calculator-header p {
  font-size: 1rem;
  color: #6b7280;
}

.calculator-content {
  background: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.not-authorized {
  text-align: center;
  padding: 4rem 2rem;
  color: #6b7280;
}
</style>
