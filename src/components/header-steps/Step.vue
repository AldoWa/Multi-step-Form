<template>
  <div class="w-9 h-9 rounded-full flex items-center justify-center"
    :class="isActualStep ? 'bg-[#FC6C4C]' : 'bg-[#E5E7EB]'"
    data-test="step"
  >
    <span :class="isActualStep ? 'text-white' : 'text-[#111827]'"
    >{{ step }}</span>
  </div>
</template>

<script setup lang="ts">
interface StepProps {
  step: number
  isActualStep: boolean;
}
defineProps<StepProps>()
</script>