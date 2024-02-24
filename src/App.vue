<template>
  <div class="container h-screen w-full flex items-center justify-center mx-auto">
    <div class="bg-white drop-shadow-3xl py-8 px-7 rounded-2xl">
      <Steps
        :actualStep="1"
      ></Steps>
      <Step1></Step1>
    </div>
  </div>
</template>

<script setup lang="ts">
import Steps from './components/header-steps/Steps.vue'
import Step1 from './components/step1/Step1.vue'
</script>

